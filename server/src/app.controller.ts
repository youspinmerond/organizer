import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ActionDTO } from 'dto/action.dto';
import { Response } from 'express';
import { z } from 'zod';

const Schema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  day:
    z.literal('1') ||
    z.literal('2') ||
    z.literal('3') ||
    z.literal('4') ||
    z.literal('5'),
  date: z.number().min(13),
  status: z.boolean(),
});

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createAction(
    @Body() body: ActionDTO,
    @Res() res: Response,
  ): Promise<any> {
    const status = Schema.safeParse(body);
    if (status.success === true) {
      const result = await this.appService.createAction(body);
      res.status(201);
      res.json({ message: 'succes', result: result });
    } else {
      res.status(400);
      res.json({ message: 'wrong data', result: status });
    }
  }

  @Get()
  getAction(@Query('id') id: number): any {
    console.log(Number(id));
    return this.appService.getAction(id);
  }
}
