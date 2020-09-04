import "reflect-metadata";
import { createConnection } from "typeorm";
import { House } from "./entities/House";
import { Apartment } from "./entities/Apartement";
import { Neighborhood } from "./entities/Neighborhood";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "imovelDb",
    username: "christian",
    password: "",
    logging: true,
    synchronize: true,
    entities: [House, Apartment, Neighborhood],
  });
};

main();
