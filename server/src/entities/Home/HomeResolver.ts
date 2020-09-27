import { Resolver } from "type-graphql";
import { getRepository } from "typeorm";
import { FieldError } from "../../utils/FieldError";
import { Address } from "../Address/Address";
import { AddressInput } from "../Address/AddressInput";
import {
  ADDRESS_NOT_FOUND_ERROR,
  NO_ADDRESS_ERRORS,
} from "./../../utils/Errors";
import { HouseInput } from "./House/HouseInput";

@Resolver()
export class HomeResolver {
  async getAddressById(id?: number): Promise<Address | undefined> {
    if (!id) return undefined;
    const result = await Address.findOne(id);
    return result;
  }

  async getAddress(address?: AddressInput): Promise<Address | undefined> {
    if (!address) return undefined;
    const result = await getRepository(Address)
      .createQueryBuilder("address")
      .where(
        `address.street = :street
         AND address.number = :number
         AND address.postalCode = :postalCode
         AND address.neighborhoodId = :neighborhoodId`,
        {
          street: address?.street,
          number: address?.number,
          postalCode: address?.postalCode,
          neighborhoodId: address?.neighborhoodId,
        }
      )
      .getOne();
    return result;
  }

  async insertAddress(address?: AddressInput): Promise<Address | undefined> {
    const newAddress = await (await Address.insert({ ...address })).raw[0];
    return await Address.findOne(parseInt(newAddress.id));
  }

  async checkForAddressErrors(
    data: HouseInput
  ): Promise<FieldError[] | Address> {
    if (data.addressId != null) {
      const selectedAddress = await this.getAddressById(data.addressId);
      if (!selectedAddress) return [ADDRESS_NOT_FOUND_ERROR];
      else return selectedAddress;
    } else if (data.address != null) {
      const selectedAddress = await this.getAddress(data.address);
      if (selectedAddress) return selectedAddress;
      else {
        const newAddress = await this.insertAddress(data.address);
        if (newAddress) return newAddress;
      }
    }
    return NO_ADDRESS_ERRORS;
  }
}
