import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../../utils/FieldError";
import { Apartment } from "./Apartement";

@ObjectType()
export class ApartmentResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Apartment, { nullable: true })
  apartment?: Apartment;
}
