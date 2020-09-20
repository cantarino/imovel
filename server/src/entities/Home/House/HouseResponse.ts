import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../../utils/FieldError";
import { House } from "./House";

@ObjectType()
export class HouseResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => House, { nullable: true })
  house?: House;
}
