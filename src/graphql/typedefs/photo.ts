import { gql } from 'apollo-server-lambda';

export const photoType = gql`
    type Photo{
        id:Int!
        name:String!
        description:String!
        filename:String!
        views: Int!
        isPublished: Boolean!
    }
`;