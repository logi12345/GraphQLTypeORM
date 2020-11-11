(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! export graphqlHandler [provided] [maybe used in src/index (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in src/index (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphqlHandler": () => /* binding */ graphqlHandler
/* harmony export */ });
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvers */ "./src/resolvers.ts");
/* harmony import */ var _type_defs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-defs */ "./src/type-defs.ts");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models_photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/photo */ "./src/models/photo.ts");
;





(0,typeorm__WEBPACK_IMPORTED_MODULE_4__.createConnection)({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "TSGQLTest",
    entities: [
        _models_photo__WEBPACK_IMPORTED_MODULE_5__.Photo
    ],
    synchronize: true,
    logging: false
}).then(connection => {
}).catch(error => console.log(error));
const apolloServer = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({ resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_1__.resolvers, typeDefs: _type_defs__WEBPACK_IMPORTED_MODULE_2__.typeDefs });
const graphqlHandler = apolloServer.createHandler();


/***/ }),

/***/ "./src/models/photo.ts":
/*!*****************************!*\
  !*** ./src/models/photo.ts ***!
  \*****************************/
/*! namespace exports */
/*! export Photo [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Photo": () => /* binding */ Photo
/* harmony export */ });
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let Photo = class Photo {
};
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Photo.prototype, "id", void 0);
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Column)({
        length: 100
    }),
    __metadata("design:type", String)
], Photo.prototype, "name", void 0);
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Column)("text"),
    __metadata("design:type", String)
], Photo.prototype, "description", void 0);
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Column)(),
    __metadata("design:type", String)
], Photo.prototype, "filename", void 0);
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Column)("decimal"),
    __metadata("design:type", Number)
], Photo.prototype, "views", void 0);
__decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Column)(),
    __metadata("design:type", Boolean)
], Photo.prototype, "isPublished", void 0);
Photo = __decorate([
    (0,typeorm__WEBPACK_IMPORTED_MODULE_0__.Entity)()
], Photo);



/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/*! namespace exports */
/*! export resolvers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => /* binding */ resolvers
/* harmony export */ });
const resolvers = {
    Query: {
        photo: (id) => 'Hello World!',
    },
};


/***/ }),

/***/ "./src/type-defs.ts":
/*!**************************!*\
  !*** ./src/type-defs.ts ***!
  \**************************/
/*! namespace exports */
/*! export typeDefs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": () => /* binding */ typeDefs
/* harmony export */ });
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
;
const typeDefs = apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__.gql `
  type Query {
    photo(id:Int!): Photo
  }
  type Photo{
        id:Int!
        name:String!
        description:String!
        filename:String!
        views: Int!
        isPublished: Boolean!
    }
`;


/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("apollo-server-lambda");;

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("reflect-metadata");;

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()

));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FwaS8uL3NyYy9tb2RlbHMvcGhvdG8udHMiLCJ3ZWJwYWNrOi8vYXBpLy4vc3JjL3Jlc29sdmVycy50cyIsIndlYnBhY2s6Ly9hcGkvLi9zcmMvdHlwZS1kZWZzLnRzIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbGFtYmRhXCIiLCJ3ZWJwYWNrOi8vYXBpL2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2FwaS9leHRlcm5hbCBcInR5cGVvcm1cIiIsIndlYnBhY2s6Ly9hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXBpL3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcbmltcG9ydCB7IHJlc29sdmVycyB9IGZyb20gJy4vcmVzb2x2ZXJzJztcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSAnLi90eXBlLWRlZnMnO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuXG5pbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb259IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQge1Bob3RvfSBmcm9tIFwiLi9tb2RlbHMvcGhvdG9cIjtcblxuY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgdHlwZTogXCJwb3N0Z3Jlc1wiLFxuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgcG9ydDogNTQzMixcbiAgICB1c2VybmFtZTogXCJwb3N0Z3Jlc1wiLFxuICAgIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsXG4gICAgZGF0YWJhc2U6IFwiVFNHUUxUZXN0XCIsXG4gICAgZW50aXRpZXM6IFtcbiAgICAgICAgUGhvdG9cbiAgICBdLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dpbmc6IGZhbHNlXG59KS50aGVuKGNvbm5lY3Rpb24gPT4ge1xuICAgIC8vIGhlcmUgeW91IGNhbiBzdGFydCB0byB3b3JrIHdpdGggeW91ciBlbnRpdGllc1xufSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHJlc29sdmVycywgdHlwZURlZnMgfSk7XG5cbmV4cG9ydCBjb25zdCBncmFwaHFsSGFuZGxlciA9IGFwb2xsb1NlcnZlci5jcmVhdGVIYW5kbGVyKCk7IiwiaW1wb3J0IHtFbnRpdHksIENvbHVtbiwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUGhvdG8ge1xuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZCE6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oe1xuICAgICAgICBsZW5ndGg6IDEwMFxuICAgIH0pXG4gICAgbmFtZSE6IHN0cmluZztcblxuICAgIEBDb2x1bW4oXCJ0ZXh0XCIpXG4gICAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBmaWxlbmFtZSE6IHN0cmluZztcblxuXG4gICAgQENvbHVtbihcImRlY2ltYWxcIilcbiAgICB2aWV3cyE6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIGlzUHVibGlzaGVkITogYm9vbGVhbjtcbn0iLCJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgIHBob3RvOiAoaWQ6bnVtYmVyKSA9PiAnSGVsbG8gV29ybGQhJyxcbiAgICB9LFxuXG4gIH0iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCB0eXBlRGVmcyA9IGdxbGBcbiAgdHlwZSBRdWVyeSB7XG4gICAgcGhvdG8oaWQ6SW50ISk6IFBob3RvXG4gIH1cbiAgdHlwZSBQaG90b3tcbiAgICAgICAgaWQ6SW50IVxuICAgICAgICBuYW1lOlN0cmluZyFcbiAgICAgICAgZGVzY3JpcHRpb246U3RyaW5nIVxuICAgICAgICBmaWxlbmFtZTpTdHJpbmchXG4gICAgICAgIHZpZXdzOiBJbnQhXG4gICAgICAgIGlzUHVibGlzaGVkOiBCb29sZWFuIVxuICAgIH1cbmA7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1sYW1iZGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGVvcm1cIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFHQTtBQXFCQTtBQW5CQTtBQURBOztBQUNBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7O0FBQ0E7QUFHQTtBQURBOztBQUNBO0FBR0E7QUFEQTs7QUFDQTtBQUlBO0FBREE7O0FBQ0E7QUFHQTtBQURBOztBQUNBO0FBcEJBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=