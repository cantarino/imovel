import { Field, InputType } from "type-graphql";
import { AddressInput } from "../../Address/AddressInput";

@InputType()
export class HouseInput {
  @Field()
  bedrooms: number;

  @Field()
  suites: number;

  @Field()
  livingRooms: number;

  @Field()
  parkingSpots: number;

  @Field()
  size: number;

  @Field(() => Boolean)
  hasCloset: boolean;

  @Field()
  rent: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  addressId?: number;

  @Field({ nullable: true })
  address?: AddressInput;
}
