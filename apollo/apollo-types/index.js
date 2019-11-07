import { typeDefs } from "./type-defs.js";
import { eventsTypes } from "./events-types.js";

let types = {
  ...eventsTypes,
  ...typeDefs
};

export default types;
