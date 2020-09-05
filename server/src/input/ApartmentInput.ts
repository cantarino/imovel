import { Field, InputType } from "type-graphql";
import { HouseInput } from "./HouseInput";

@InputType()
export class ApartmentInput extends HouseInput {
  @Field()
  floor: number;

  @Field()
  rent: number;

  @Field()
  hasDoorman: boolean;
}
