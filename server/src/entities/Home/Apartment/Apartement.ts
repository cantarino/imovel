import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
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

  @ManyToOne(() => Address, (addr) => addr.apartments)
  @JoinColumn()
  address: Address;
}
