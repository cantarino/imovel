import { Field, ObjectType } from "type-graphql";
import { FieldError } from "../../utils/FieldError";
import { Neighborhood } from "./Neighborhood";

@ObjectType()
export class NeighborhoodResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Neighborhood, { nullable: true })
  neighborhood?: Neighborhood;
}
