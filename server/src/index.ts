import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { CreateDatabaseConection } from "./config/Database";
import { BuildGraphQLSchema } from "./config/Schema";

const main = async () => {
  const conn = await CreateDatabaseConection();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await BuildGraphQLSchema(),
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
