import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { House } from "./House";
import { Neighborhood } from "./Neighborhood";

@ObjectType()
@Entity()
export class Address extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  street: string;

  @Field()
  @Column()
  postalCode: string;

  @Field()
  @Column()
  neighborhoodId: number;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.addresses)
  neighborhood: Neighborhood;

  @Field()
  @Column()
  houseId: number;

  @OneToOne(() => House, (house) => house.address)
  house: House;
}
