import { createValidator } from "express-joi-validation";
import express from "express";
import { testController } from "../controller/testController";
import { createTestValidation } from "../validation/test-validation";
const testRouter = express.Router();
let validator = createValidator({});
testRouter.get("/", testController.getAll);
testRouter.post(
  "/",
  validator.body(createTestValidation),
  testController.createData
);
export default testRouter;
