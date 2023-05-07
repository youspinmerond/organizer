import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlanDTO } from 'dto/plan.dto';
import { z } from 'zod';
import { Response } from 'express';

const schema = z.object({
  name: z.string().min(3),
  description: z.string().min(4),
  status: z.boolean(),
});

@Controller('api/plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @Get()
  getPlans() {
    return this.plansService.getPlans();
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
}
