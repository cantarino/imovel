import { Field, InputType } from "type-graphql";

@InputType()
export class HouseInput {
  @Field()
  bedrooms: number;

  @Field()
  suites: number;

  @Field()
  livingRooms: number;

  //Change
  @Field({ nullable: true })
  parkingSpots: number;

  @Field()
  size: number;

  @Field()
  hasCloset: boolean;

  @Field({ nullable: true })
  description: string;

  @Field()
  neighborhoodId: number;
}
