import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { taskProviders } from './database/providers/task.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [...taskProviders, AppService],
})
export class AppModule {}
