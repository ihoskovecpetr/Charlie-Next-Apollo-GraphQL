import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID
    name: String!
    picture: String
    email: String
    password: String
  }

  type Event {
    _id: ID!
    name: String
    coordinates: [Float]
    addressGoogle: String
    addressCustom: String
    eventType: Float
    dateStart: Int
    dateEnd: Int
    price: Float
    capacityMax: Float
    BYO: Boolean
    repeatWeek: Boolean
    freeSnack: Boolean
    freeBeer: Boolean
    freeMeal: Boolean
    imagesArr: [String]
    description: String
    confirmed: Boolean
    hide: Boolean
  }

  input NewUser {
    name: String!
    picture: String
    email: String!
    password: String!
  }

  type Query {
    viewer: User
    showUsers: [User]
  }

  type Mutation {
    newUser(newUser: NewUser!): User
  }
`;
