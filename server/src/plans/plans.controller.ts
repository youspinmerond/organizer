import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlanDTO } from 'dto/plan.dto';
import { z } from 'zod';
import { Response } from 'express';

const schema = z.object({
  name: z.string().min(2),
  description: z.string().min(3),
  status: z.boolean(),
});

@Controller('api/plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get()
  async getPlans(@Res() res: Response) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Max-Age', '3600');

    const result = await this.plansService.getPlans();
    res.send(result);
  }
  @Post()
  createPlan(@Body() body: PlanDTO, @Res() res: Response) {
    const status = schema.safeParse(body);
    if (!status.success) {
      res.status(400);
      res.json(status);
    }
    const result = this.plansService.createPlan(body);
    return result;
  }
  @Put(':id')
  async updatePlan(@Param('id') id, @Body() body: PlanDTO | string) {
    const preaparedBody = typeof body === 'string' ? JSON.parse(body) : body;

    const status = schema.safeParse(preaparedBody);
    if (!status.success) return status;

    const result = await this.plansService.updatePlan({
      id: Number(id),
      ...preaparedBody,
    });
    console.log(result);
    return result;
  }
  @Delete(':id')
  deletePlan(@Param('id') id) {
    return this.plansService.deletePlan(Number(id));
  }
}
