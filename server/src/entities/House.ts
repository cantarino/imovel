import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Neighborhood } from "./Neighborhood";

@Entity()
export class House extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bedroomNumber: number;

  @Column()
  suitesNumber: number;

  @Column()
  livingRoomNumber: number;

  @Column()
  size: number;

  @Column()
  hasCloset: boolean;

  @Column()
  description: string;

  @ManyToOne((type) => Neighborhood, (neighborhood) => neighborhood.houses)
  neighborhood: Neighborhood;
}
