import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";

@ObjectType()
@Entity()
export class House extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  bedrooms: number;

  @Field()
  @Column()
  suites: number;

  @Field()
  @Column()
  livingRooms: number;

  @Field()
  @Column()
  parkingSpots: number;

  @Field()
  @Column({ type: "float" })
  size: number;

  @Field()
  @Column()
  hasCloset: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @Field()
  @Column({ type: "float" })
  rent: number;

  @Field()
  @Column()
  addressId: number;

  @OneToOne(() => Address, (addr) => addr.house)
  @JoinColumn()
  address: Address;
}
