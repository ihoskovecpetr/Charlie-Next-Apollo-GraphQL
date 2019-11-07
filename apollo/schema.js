import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./apollo-types/index.js";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
