import { Injectable, Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ICategory } from "./interfaces/categories/category.interface";
import { IPlayer } from "./interfaces/players/player.interface";

@Injectable()
export class AppService {
  constructor(
    @InjectModel("Category") private readonly categoryModel: Model<ICategory>,
    @InjectModel("Player") private readonly playerModel: Model<IPlayer>,
  ) {}

  private readonly logger = new Logger(AppService.name);

  async createCategory(category: ICategory): Promise<ICategory> {
    try {
      const createdCategory = new this.categoryModel(category);
      return await createdCategory.save();
    } catch (err) {
      throw new RpcException(err.message);
    }
  }

  async showCategories(): Promise<ICategory[]> {
    try {
      return await this.categoryModel.find().exec();
    } catch (err) {
      this.logger.error(`Error: ${JSON.stringify(err.message)}`);
      throw new RpcException(err.message);
    }
  }

  async showCategoryById(_id: string): Promise<ICategory> {
    try {
      return await this.categoryModel.findOne({ _id }).exec();
    } catch (err) {
      this.logger.error(`Error: ${JSON.stringify(err.message)}`);
      throw new RpcException(err.message);
    }
  }
}
