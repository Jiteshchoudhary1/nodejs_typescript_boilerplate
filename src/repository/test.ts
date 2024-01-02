import { TestModel } from "../database/models/testModel";

export const testRepository = {
  async findAll() {
    return await TestModel.find({});
  },
  async create(params: any) {
    return await TestModel.create(params);
  },
};
