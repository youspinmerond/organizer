import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createAction(@Body() query: any): any {
    console.log(query);
    return query;
    return this.appService.createAction();
  }

  @Get()
  getHello(@Query('id') id: number): any {
    console.log(Number(id));
    return this.appService.getAction(id);
  }
}
