import { Express } from "express";
import testRouter from "./test";

export default function routes(app: Express) {
  app.use("/test", testRouter);
}
