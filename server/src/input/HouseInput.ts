import { Field, InputType } from "type-graphql";

@InputType()
export class HouseInput {
  @Field()
  bedroomNumber: number;

  @Field()
  suitesNumber: number;

  @Field()
  livingRoomNumber: number;

  @Field()
  size: number;

  @Field()
  hasCloset: boolean;

  @Field({ nullable: true })
  description: string;

  @Field()
  neighborhoodId: number;
}
