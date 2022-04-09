import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './database/models/task.entity';
import { CreateTaskDto } from './Interfaces/CreateTaskDto';
import { InsertResult } from 'typeorm';

@Controller('tasks')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTasks(): Promise<Task[]> | void {
    return this.appService.getAllTasks();
  }

  @Post('create-task')
  createNewTask(@Body() task: CreateTaskDto): Promise<InsertResult> | void {
    return this.appService.createNewTask(task);
  }
}
