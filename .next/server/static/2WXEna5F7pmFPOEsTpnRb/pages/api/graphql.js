module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dCYn");


/***/ }),

/***/ "9OSe":
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "GW0h":
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "UETC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "graphql-tools"
var external_graphql_tools_ = __webpack_require__("9OSe");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./apollo/type-defs.js

const typeDefs = external_graphql_tag_default.a`
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
// EXTERNAL MODULE: ./apollo/resolvers.js
var resolvers = __webpack_require__("acRi");

// CONCATENATED MODULE: ./apollo/schema.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return schema; });



const schema = Object(external_graphql_tools_["makeExecutableSchema"])({
  typeDefs: typeDefs,
  resolvers: resolvers["b" /* resolvers */]
});

/***/ }),

/***/ "acRi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pubsub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resolvers; });
const {
  PubSub
} = __webpack_require__("GW0h");

const NEW_USER = "NEW_USER";
const pubsub = new PubSub();
const resolvers = {
  Subscription: {
    newUser: {
      subscribe: (_, __, {
        pubsub
      }) => pubsub.asyncIterator(NEW_USER)
    }
  },
  Query: {
    viewer(_parent, _args, _context, _info) {
      return {
        id: 1,
        name: "John Smith XoX",
        status: "cached"
      };
    }

  },
  Mutation: {
    newUser(_parent, _args, {
      pubsub
    }, _info) {
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

/***/ }),

/***/ "dCYn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("re1k");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UETC");
/* harmony import */ var _apollo_resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("acRi");



const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema: _apollo_schema__WEBPACK_IMPORTED_MODULE_1__["schema"],
  context: () => ({
    pubsub: _apollo_resolvers__WEBPACK_IMPORTED_MODULE_2__[/* pubsub */ "a"]
  }),
  subscriptions: "api/subs"
});
console.log("Hitting endpoint /graphql");
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (apolloServer.createHandler({
  path: "/api/graphql"
}));

/***/ }),

/***/ "re1k":
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ })

/******/ });