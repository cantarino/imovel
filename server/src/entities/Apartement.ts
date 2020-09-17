import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { House } from "./House";

@ObjectType()
@Entity()
export class Apartment extends House {
  @Field()
  @Column()
  floor: number;

  @Field()
  @Column({ type: "float" })
  buildingRent: number;

  @Field()
  @Column()
  hasDoorman: boolean;
}
