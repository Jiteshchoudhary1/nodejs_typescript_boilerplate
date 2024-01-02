import mongoose, { Schema, Document } from "mongoose";

// export interface ITest extends Document {
//   name: string;
//   email: string;
// }

const TestSchema: Schema = new Schema({
  name: String,
  email: String,
});
export const TestModel = mongoose.model("Test", TestSchema);
