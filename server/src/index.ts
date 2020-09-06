import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { Apartment } from "./entities/Apartement";
import { House } from "./entities/House";
import { Neighborhood } from "./entities/Neighborhood";
import { ApartmentResolver } from "./resolvers/apartment";
import { HouseResolver } from "./resolvers/house";
import { NeighborhoodResolver } from "./resolvers/neighborhood";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [House, Apartment, Neighborhood],
  });
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HouseResolver, ApartmentResolver, NeighborhoodResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server on");
  });
};

main().catch((err) => {
  console.log("error: ", err);
});
