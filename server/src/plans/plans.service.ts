import { Injectable } from '@nestjs/common';
import { Plan, PrismaClient } from '@prisma/client';
import { PlanDTO } from 'dto/plan.dto';
const prisma = new PrismaClient();

@Injectable()
export class PlansService {
  async getPlans(): Promise<PlanDTO[]> {
    const count = await prisma.plan.count();
    const result = await prisma.plan.findMany({
      take: count,
    });
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
  async updatePlan(plan: Plan): Promise<PlanDTO> {
    const result = await prisma.plan.upsert({
      where: {
        id: plan.id,
      },
      update: {
        name: plan.name,
        description: plan.description,
        status: plan.status,
      },
      create: {
        name: plan.name,
        description: plan.description,
        status: plan.status,
      },
    });
    return result;
  }
  async deletePlan(id: number): Promise<any> {
    const result = await prisma.plan.delete({
      where: {
        id: id,
      },
    });
    return result;
  }
}
