import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PlanDTO } from 'dto/plan.dto';
const prisma = new PrismaClient();

@Injectable()
export class PlansService {
  async getPlans(): Promise<PlanDTO[]> {
    const count = await prisma.plan.count();
    const result = await prisma.plan.findMany({
      take: count,
    });
    console.log(result);
    return result;
  }

  async createPlan(plan: PlanDTO): Promise<PlanDTO> {
    const result = await prisma.plan.create({
      data: {
        name: plan.name,
        description: plan.description,
        status: plan.status,
      },
    });
    return result;
  }
}
