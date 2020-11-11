
import { Repository, getConnection } from "typeorm";
import { Photo } from "../../models/photo";

export const resolvers = {
    Query: {
      photo: async (id:number) =>{ 
        let x = await getConnection().getRepository(Photo).findOne(id);
        console.log(x)
        return x;
      
      },
    },
    
  }