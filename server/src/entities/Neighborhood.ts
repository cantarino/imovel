import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { House } from "./House";

@ObjectType()
@Entity()
export class Neighborhood extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  // @Field()
  @OneToMany((type) => House, (house) => house.neighborhood)
  houses: House[];
}
