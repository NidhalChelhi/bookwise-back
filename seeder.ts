import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { Seeder } from "./src/database/seeder";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(Seeder);
  await seeder.seed();
  await app.close();
}

bootstrap();
