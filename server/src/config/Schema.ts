import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { AddressResolver } from "../entities/Address/AddressResolver";
import { ApartmentResolver } from "../entities/Home/Apartment/ApartmentResolver";
import { HouseResolver } from "../entities/Home/House/HouseResolver";
import { NeighborhoodResolver } from "../entities/Neighborhood/NeighborhoodResolver";

export async function BuildGraphQLSchema() {
  return buildSchema({
    resolvers: [
      HouseResolver,
      ApartmentResolver,
      NeighborhoodResolver,
      AddressResolver,
    ],
    validate: false,
  });
}
