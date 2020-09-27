import path from "path";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Address } from "../entities/Address/Address";
import { Apartment } from "../entities/Home/Apartment/Apartement";
import { House } from "../entities/Home/House/House";
import { Neighborhood } from "../entities/Neighborhood/Neighborhood";

export async function createDatabaseConection() {
  return createConnection({
    type: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: true,
    synchronize: false,
    migrations: [path.join(__dirname, "./../migrations/*")],
    entities: [House, Apartment, Neighborhood, Address],
  });
}
