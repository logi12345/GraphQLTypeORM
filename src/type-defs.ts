import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
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