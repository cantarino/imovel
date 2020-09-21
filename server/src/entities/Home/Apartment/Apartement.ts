import { Field, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne } from "typeorm";
import { Address } from "../../Address/Address";
import { Home } from "../Home";

@ObjectType()
@Entity()
export class Apartment extends Home {
  @Field()
  @Column()
  floor: number;

  @Field()
  @Column()
  apartmentNumber: number;

  @Field()
  @Column({ type: "float" })
  buildingRent: number;

  @Field()
  @Column()
  hasDoorman: boolean;

  @Field(() => Address, { nullable: true })
  @ManyToOne(() => Address, (addr) => addr.apartments)
  address: Address;
}
