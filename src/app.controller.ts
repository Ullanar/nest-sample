import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ITask } from './Interfaces';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Array<ITask> {
    return this.appService.getHello();
  }
}
