import { FieldError } from "src/utils/FieldError";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection, getRepository } from "typeorm";
import {
  ID_NOT_FOUND_ERROR,
  REPEATED_ADDRESS_ERROR,
} from "../../../utils/Errors";
import { HomeResolver } from "../HomeResolver";
import { Apartment } from "./Apartement";
import { ApartmentInput } from "./ApartmentInput";
import { ApartmentResponse } from "./ApartmentResponse";

@Resolver()
export class ApartmentResolver extends HomeResolver {
  @Query(() => [Apartment])
  async apartments(
    @Arg("neighborhoodId", () => Int, { nullable: true })
    neighborhoodId?: number
  ): Promise<Apartment[]> {
    let whereClauses = "";
    if (neighborhoodId) whereClauses = "Neighborhood.id = :id";
    const apartments = await getConnection()
      .getRepository(Apartment)
      .createQueryBuilder("Apartment")
      .leftJoinAndMapOne("Apartment.address", "Apartment.address", "Address")
      .leftJoinAndMapOne(
        "Address.neighborhood",
        "Address.neighborhood",
        "Neighborhood"
      )
      .where(whereClauses, { id: neighborhoodId })
      .orderBy("Apartment.id", "ASC")
      .getMany();
    return apartments;
  }

  @Query(() => Apartment, { nullable: true })
  async apartment(@Arg("id") id: number): Promise<Apartment | undefined> {
    return Apartment.findOne(id);
  }

  async apartmentAlreadyExistsErrors(
    selectedAddressId: number,
    floor: number,
    apartmentNumber: number,
    id?: number
  ): Promise<FieldError[] | undefined> {
    let queryString = `apartment.addressId = :addressId
       AND apartment.floor = :floor
       AND apartment.apartmentNumber = :apartmentNumber
       `;
    if (id) queryString = queryString + "AND apartment.id != :id";
    const result = await getRepository(Apartment)
      .createQueryBuilder("apartment")
      .where(queryString, {
        addressId: selectedAddressId,
        floor: floor,
        apartmentNumber: apartmentNumber,
        id: id,
      })
      .getOne();
    if (result) return [REPEATED_ADDRESS_ERROR];
    return undefined;
  }

  @Mutation(() => ApartmentResponse)
  async insertApartment(
    @Arg("data") data: ApartmentInput
  ): Promise<ApartmentResponse> {
    //Check address;
    let addressCheck = await this.checkForAddressErrors(data);
    let selectedAddressId: number;
    if ("id" in addressCheck) selectedAddressId = addressCheck.id;
    else return { errors: addressCheck };

    //Check apartment
    let errors = await this.apartmentAlreadyExistsErrors(
      selectedAddressId,
      data.floor,
      data.apartmentNumber
    );
    if (errors) return { errors: errors };

    //Insert new apt
    const apartmentId = await (
      await Apartment.insert({
        addressId: selectedAddressId,
        hasCloset: data.hasCloset,
        bedrooms: data.bedrooms,
        size: data.size,
        suites: data.suites,
        livingRooms: data.livingRooms,
        parkingSpots: data.parkingSpots,
        rent: data.rent,
        description: data.description,
        hasDoorman: data.hasDoorman,
        floor: data.floor,
        apartmentNumber: data.apartmentNumber,
        buildingRent: data.buildingRent,
      })
    ).raw[0];
    let id = parseInt(apartmentId.id);
    let newApartment = await Apartment.findOne(id);
    return { apartment: newApartment };
  }

  @Mutation(() => ApartmentResponse)
  async updateApartment(
    @Arg("id") id: number,
    @Arg("data") data: ApartmentInput
  ): Promise<ApartmentResponse> {
    //Check address;
    let addressCheck = await this.checkForAddressErrors(data);
    let selectedAddressId: number;
    if ("id" in addressCheck) selectedAddressId = addressCheck.id;
    else return { errors: addressCheck };

    //Check apartment equal
    let errors = await this.apartmentAlreadyExistsErrors(
      selectedAddressId,
      data.floor,
      data.apartmentNumber,
      id
    );
    if (errors) return { errors: errors };

    //Check apt exists
    const apartment = await Apartment.findOne(id);
    if (!apartment) return { errors: [ID_NOT_FOUND_ERROR] };

    //Update apt
    const result = await getConnection()
      .createQueryBuilder()
      .update(Apartment)
      .set({
        addressId: selectedAddressId,
        hasCloset: data.hasCloset,
        bedrooms: data.bedrooms,
        size: data.size,
        suites: data.suites,
        livingRooms: data.livingRooms,
        parkingSpots: data.parkingSpots,
        rent: data.rent,
        description: data.description,
        hasDoorman: data.hasDoorman,
        floor: data.floor,
        apartmentNumber: data.apartmentNumber,
        buildingRent: data.buildingRent,
      })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();

    //return
    let updatedApartment = await Apartment.findOne(id);
    return { apartment: updatedApartment };
  }

  @Mutation(() => Boolean)
  async deleteApartment(@Arg("id", () => Int) id: number): Promise<boolean> {
    await Apartment.delete(id);
    return true;
  }
}
