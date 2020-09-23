import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Home extends BaseEntity {
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

  @Field(() => Boolean)
  @Column({ type: "boolean" })
  hasCloset: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field()
  @Column({ type: "float" })
  rent: number;

  @Field()
  @Column()
  addressId: number;
}
