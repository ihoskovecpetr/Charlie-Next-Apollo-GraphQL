import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import { pubsub } from "../../apollo/resolvers";

const apolloServer = new ApolloServer({
  schema,
  context: () => ({ pubsub }),
  subscriptions: "api/subs"
});

console.log("Hitting endpoint /graphql");

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
