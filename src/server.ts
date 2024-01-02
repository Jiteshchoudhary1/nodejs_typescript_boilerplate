import dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response } from "express";
const app = express();
import routes from "./router";
import { dbConnection } from "./database/dbConnection";

let port = process.env.PORT;
app.use(express.json());
//db connection done
dbConnection();

// app.use(cors());
routes(app);

app.use((req: Request, res: Response, next: any) => {
  return res.status(404).json({
    success: false,
    data: "null",
    message: "Route not found ",
  });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
