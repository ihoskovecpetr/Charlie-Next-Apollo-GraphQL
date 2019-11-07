import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../apollo/schema";
import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://AdminPetr:GraphQL@cluster0-il454.mongodb.net/Petrova-Collection?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Mongo is cnnected`);
  })
  .catch(err => {
    console.log(err);
  });

const apolloServer = new ApolloServer({
  schema
});

console.log("Hitting endpoint /graphql");

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: "/api/graphql" });
