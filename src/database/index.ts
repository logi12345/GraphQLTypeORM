import {createConnection} from "typeorm";
import {Photo} from "../models/photo";

export const database = () => ({
    before: async (_:any,next:any) => {
      await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "password",
        database: "TSGQLTest",
        entities: [
            Photo
        ],
        synchronize: true,
        logging: false
    });
      next();
    },
  });
