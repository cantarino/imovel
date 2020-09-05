import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Neighborhood } from "./Neighborhood";

@ObjectType()
@Entity()
export class House extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  bedroomNumber: number;

  @Field()
  @Column()
  suitesNumber: number;

  @Field()
  @Column()
  livingRoomNumber: number;

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
  @Column()
  neighborhoodId: number;

  @ManyToOne(() => Neighborhood, (neighborhood) => neighborhood.houses)
  neighborhood: Neighborhood;
}
