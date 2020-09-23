import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { createDatabaseConection } from "./config/Database";
import { buildGraphQLSchema } from "./config/Schema";

const main = async () => {
  const conn = await createDatabaseConection();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildGraphQLSchema(),
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
