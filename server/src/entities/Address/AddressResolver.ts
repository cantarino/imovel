import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection, getRepository } from "typeorm";
import {
  ID_NOT_FOUND_ERROR,
  NEIGHBORHOOD_NOT_FOUND_ERROR,
  REPEATED_ENTITY_ERROR,
} from "../../utils/Errors";
import { Neighborhood } from "../Neighborhood/Neighborhood";
import { Address } from "./Address";
import { AddressInput } from "./AddressInput";
import { AddressResponse } from "./AddressResponse";

@Resolver()
export class AddressResolver {
  @Query(() => [Address])
  async addresses(): Promise<Address[]> {
    return Address.find();
  }

  @Query(() => Address, { nullable: true })
  async address(@Arg("id") id: number): Promise<Address | undefined> {
    return Address.findOne(id);
  }

  async neighborhoodExits(id: number): Promise<boolean> {
    const result = await Neighborhood.findOne(id);
    return !(result == undefined);
  }

  @Mutation(() => AddressResponse)
  async insertAddress(
    @Arg("data") data: AddressInput
  ): Promise<AddressResponse> {
    let neighborhoodExits = await this.neighborhoodExits(data.neighborhoodId);
    if (!neighborhoodExits) return { errors: [NEIGHBORHOOD_NOT_FOUND_ERROR] };

    const result = await getRepository(Address)
      .createQueryBuilder("address")
      .where(
        `address.street = :street
       AND address.number = :number
       AND address.postalCode = :postalCode
       AND address.neighborhoodId = :neighborhoodId`,
        {
          street: data.street,
          number: data.number,
          postalCode: data.postalCode,
          neighborhoodId: data.neighborhoodId,
        }
      )
      .getOne();
    if (result) return { errors: [REPEATED_ENTITY_ERROR] };

    const address = await (await Address.insert(data)).raw[0];
    let id = parseInt(address.id);
    let newAddress = await Address.findOne(id);
    return { address: newAddress };
  }

  @Mutation(() => AddressResponse)
  async updateAddress(
    @Arg("id") id: number,
    @Arg("data") data: AddressInput
  ): Promise<AddressResponse> {
    let neighborhoodExits = await this.neighborhoodExits(data.neighborhoodId);
    if (!neighborhoodExits) return { errors: [NEIGHBORHOOD_NOT_FOUND_ERROR] };

    const selectedAddress = await Address.findOne(id);
    if (!selectedAddress) return { errors: [ID_NOT_FOUND_ERROR] };
    const result = await getConnection()
      .createQueryBuilder()
      .update(Address)
      .set({ ...data })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    let updatedAddress = await Address.findOne(id);
    return { address: updatedAddress };
  }

  @Mutation(() => Boolean)
  async deleteAddress(@Arg("id") id: number): Promise<boolean> {
    await Address.delete(id);
    return true;
  }
}
