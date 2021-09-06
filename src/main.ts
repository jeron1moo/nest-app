import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './utils/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import * as helmet from 'helmet';
import * as session from 'express-session';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors();

  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(helmet());
  app.use(
    session({
      secret: 'asdfsdf',
      resave: false,
      saveUninitialized: false,
    }),
  );

  setupSwagger(app);
  const configService = app.get(ConfigService);
  const port = configService.get('port');

  await app.listen(port);
  logger.log(`App listening on port ${port}`);
}
bootstrap();
