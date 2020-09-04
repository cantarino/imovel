import { Column, Entity } from "typeorm";
import { House } from "./House";

@Entity()
export class Apartment extends House {
  @Column()
  floor: number;

  @Column()
  rent: number;

  @Column()
  hasDoorman: boolean;
}
