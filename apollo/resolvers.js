export const resolvers = {
  Query: {
    viewer(_parent, _args, _context, _info) {
      return { id: 1, name: "John Smith XoX", status: "cached" };
    }
  },
  Mutation: {
    newUser(_parent, _args, _context, _info) {
      console.log("_args: ", _args);

      return {
        id: 123,
        name: _args.newUser.name,
        status: _args.newUser.status
      };
    }
  }
};
