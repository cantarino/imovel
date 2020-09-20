import { ObjectType } from "type-graphql";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { Address } from "../../Address/Address";
import { Home } from "../Home";

@ObjectType()
@Entity()
export class House extends Home {
  @OneToOne(() => Address, (addr) => addr.house)
  @JoinColumn()
  address: Address;
}
