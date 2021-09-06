import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from '../post/post.module';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from 'src/utils/config';

@Module({
  imports: [
    PostModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
