import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Subscription {
    newUser: User!
  }

  type Query {
    viewer: User
  }

  type Mutation {
    newUser(newUser: NewUser!): User
  }

  input NewUser {
    id: ID
    name: String!
    status: String!
  }
`;
