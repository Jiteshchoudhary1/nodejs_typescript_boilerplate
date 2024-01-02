import { NextFunction, Request, Response } from "express";
import { testRepository } from "../repository/test";

export const testController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      let data = await testRepository.findAll();
      return res.status(200).json({
        success: true,
        data,
        message: "data we have successfully",
      });
    } catch (error) {
      return next(error);
    }
  },
  async createData(req: Request, res: Response, next: NextFunction) {
    try {
      let data = await testRepository.create(req.body);
      return res.status(200).json({
        success: true,
        data,
        message: "data we have successfully",
      });
    } catch (error) {
      return next(error);
    }
  },
};
