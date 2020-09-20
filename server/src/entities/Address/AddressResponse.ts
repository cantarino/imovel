import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../utils/FieldError";
import { Address } from "./Address";

@ObjectType()
export class AddressResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Address, { nullable: true })
  address?: Address;
}
