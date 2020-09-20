import { Field, InputType } from "type-graphql";
import { HouseInput } from "../House/HouseInput";

@InputType()
export class ApartmentInput extends HouseInput {
  @Field()
  floor: number;

  @Field()
  apartmentNumber: number;

  @Field()
  buildingRent: number;

  @Field()
  hasDoorman: boolean;
}
