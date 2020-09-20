import { Field, InputType } from "type-graphql";

@InputType()
export class AddressInput {
  @Field()
  street: string;

  @Field()
  number: number;

  @Field()
  postalCode: string;

  @Field()
  neighborhoodId: number;

  @Field({ nullable: true })
  houseId: number;
}
