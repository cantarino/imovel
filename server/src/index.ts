import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { createDatabaseConection } from "./config/Database";
import { buildGraphQLSchema } from "./config/Schema";

const main = async () => {
  const conn = await createDatabaseConection();
  await conn.runMigrations();
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  const apolloServer = new ApolloServer({
    schema: await buildGraphQLSchema(),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server on");
  });
};

main().catch((err) => {
  console.log("error: ", err);
});
