import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './utils/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors();
  app.useGlobalFilters(new HttpExceptionFilter());
  setupSwagger(app);
  const port = process.env.PORT;
  await app.listen(port);
  logger.log(`App listening on port ${port}`);
}
bootstrap();
