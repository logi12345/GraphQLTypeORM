
import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from './resolvers';
import { typeDefs } from '../src/type-defs';
import "reflect-metadata";
import {Photo} from "./models/photo";
import middy from 'middy';
import { doNotWaitForEmptyEventLoop } from 'middy/middlewares';
import { database } from './database';

const apolloServer = new ApolloServer({resolvers,typeDefs});
export const apolloServerHandler = apolloServer.createHandler();

export const handler = middy(apolloServerHandler)
  .use(doNotWaitForEmptyEventLoop({ runOnError: false }))
  .use(database())