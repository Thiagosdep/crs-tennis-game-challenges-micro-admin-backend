// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategorySchema } from "./interfaces/categories/category.schema";
import { PlayerSchema } from "./interfaces/players/player.schema";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOOSE_CLUSTER_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forFeature([
      { name: "Category", schema: CategorySchema },
      { name: "Player", schema: PlayerSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
