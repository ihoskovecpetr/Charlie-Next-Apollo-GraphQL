//const Vote = require("./Models/Vote.js");
const User = require("./Models/User.js");

export const resolvers = {
  Query: {
    showUsers: async (_parent, _args, _context) => {
      try {
        const result = await User.find({});
        return result;
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    newUser: async (_parent, _args, _context, _info) => {
      console.log("_args: ", _args);
      try {
        console.log("try votes async");
        const newUser = new User({
          name: _args.newUser.name,
          picture: _args.newUser.picture,
          email: _args.newUser.email,
          password: _args.newUser.password
        });

        const result = await newUser.save();
        return result;
      } catch (err) {
        throw err;
      }
    }
  }
};
