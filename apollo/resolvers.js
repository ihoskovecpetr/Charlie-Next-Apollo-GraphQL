const { PubSub } = require("apollo-server");

const NEW_USER = "NEW_USER";
export const pubsub = new PubSub();

export const resolvers = {
  Subscription: {
    newUser: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER)
    }
  },
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: "John Smith XoX", status: "cached" };
    }
  },
  Mutation: {
    newUser(_parent, _args, { pubsub }, _info) {
      console.log("_args: ", _args);

      pubsub.publish(NEW_USER, {
        id: 101,
        name: "John Subscriber",
        status: "cacheding"
      });

      return {
        id: 123,
        name: _args.newUser.name,
        status: _args.newUser.status
      };
    }
  }
};
