import gql from "graphql-tag";

export const eventsTypes = gql`
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

  input NewEvent {
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
  }

  type Query {
    showEvents: [Event]
  }

  type Mutation {
    newEvent(newEvent: NewEvent!): Event
  }
`;
