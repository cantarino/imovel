import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Apartment } from "../Home/Apartment/Apartement";
import { House } from "../Home/House/House";
import { Neighborhood } from "../Neighborhood/Neighborhood";

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
  number: number;

  @Field()
  @Column()
  postalCode: string;

  @Field()
  @Column()
  neighborhoodId: number;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.addresses)
  neighborhood: Neighborhood;

  @Field({ nullable: true })
  @Column({ nullable: true })
  homeId: number;

  @OneToOne(() => House, (house) => house.address)
  house: House;

  @OneToMany(() => Apartment, (apartment) => apartment.address)
  apartments: Apartment[];
}
