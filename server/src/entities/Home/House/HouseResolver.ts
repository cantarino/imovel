import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection, getRepository } from "typeorm";
import {
  ID_NOT_FOUND_ERROR,
  REPEATED_ADDRESS_ERROR,
} from "../../../utils/Errors";
import { HomeResolver } from "../HomeResolver";
import { House } from "./House";
import { HouseInput } from "./HouseInput";
import { HouseResponse } from "./HouseResponse";

@Resolver()
export class HouseResolver extends HomeResolver {
  @Query(() => [House])
  async houses(
    @Arg("neighborhoodId", () => Int, { nullable: true })
    neighborhoodId?: number
  ): Promise<House[]> {
    let whereClauses = "";
    if (neighborhoodId) whereClauses = "Neighborhood.id = :id";
    const houses = await getConnection()
      .getRepository(House)
      .createQueryBuilder("House")
      .leftJoinAndMapOne("House.address", "House.address", "Address")
      .leftJoinAndMapOne(
        "Address.neighborhood",
        "Address.neighborhood",
        "Neighborhood"
      )
      .where(whereClauses, { id: neighborhoodId })
      .getMany();
    return houses;
  }

  @Query(() => House, { nullable: true })
  async house(@Arg("id") id: number): Promise<House | undefined> {
    return House.findOne(id);
  }

  @Mutation(() => HouseResponse)
  async insertHouse(@Arg("data") data: HouseInput): Promise<HouseResponse> {
    //Check address;
    let addressCheck = await this.CheckForAddressErrors(data);
    let selectedAddressId: number;
    if ("id" in addressCheck) selectedAddressId = addressCheck.id;
    else return { errors: addressCheck };

    //Check house address
    const result = await getRepository(House)
      .createQueryBuilder("house")
      .where(`house.addressId = :addressId`, {
        addressId: selectedAddressId,
      })
      .getOne();
    if (result) return { errors: [REPEATED_ADDRESS_ERROR] };

    //Insert new house
    const newHouseId = await (
      await House.insert({ ...data, addressId: selectedAddressId })
    ).raw[0];
    let id = parseInt(newHouseId.id);
    let newHouse = await House.findOne(id);
    return { house: newHouse };
  }

  @Mutation(() => HouseResponse)
  async updateHouse(
    @Arg("id") id: number,
    @Arg("data") data: HouseInput
  ): Promise<HouseResponse> {
    //Check address;
    let addressCheck = await this.CheckForAddressErrors(data);
    let selectedAddressId: number;
    if ("id" in addressCheck) selectedAddressId = addressCheck.id;
    else return { errors: addressCheck };

    //Check houseId
    const house = await House.findOne(id);
    if (!house) return { errors: [ID_NOT_FOUND_ERROR] };

    //Check house address
    const result = await getRepository(House)
      .createQueryBuilder("house")
      .where(
        `house.addressId = :addressId
      AND house.id != :id`,
        {
          addressId: selectedAddressId,
          id: id,
        }
      )
      .getOne();
    if (result) return { errors: [REPEATED_ADDRESS_ERROR] };

    //update
    const update = await getConnection()
      .createQueryBuilder()
      .update(House)
      .set({ ...data })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    let updatedHouse = await House.findOne(id);
    return { house: updatedHouse };
  }

  @Mutation(() => Boolean)
  async deleteHouse(@Arg("id") id: number): Promise<boolean> {
    await House.delete(id);
    return true;
  }
}
