// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

const logger = new Logger("Main");

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://user:${process.env.RMQ_PASSWORD}@${process.env.PORT_ON_AWS}/smartranking`,
      ],
      queue: "admin-backend",
    },
  });

  await app.listen(() => logger.log("Microservice is listening"));
}
bootstrap();
