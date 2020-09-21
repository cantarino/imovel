import { Field, ObjectType } from "type-graphql";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { Address } from "../../Address/Address";
import { Home } from "../Home";

@ObjectType()
@Entity()
export class House extends Home {
  @Field(() => Address, { nullable: true })
  @OneToOne(() => Address, (addr) => addr.house)
  @JoinColumn()
  address: Address;
}
