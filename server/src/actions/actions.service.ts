import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ActionDTO } from 'dto/action.dto';
const prisma = new PrismaClient();

@Injectable()
export class ActionsService {
  async createAction(body: ActionDTO): Promise<ActionDTO> {
    const res = await prisma.action.create({
      data: {
        name: body.name,
        description: body.description,
        day: body.day,
        date: new Date(body.date),
        status: body.status,
      },
    });
    return res;
  }
  async getAction(id: number): Promise<any> {
    if (typeof id === 'string') id = Number(id);

    const res = await prisma.action.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        day: true,
        date: true,
        status: true,
      },
    });
    return res;
  }
  async getLength() {
    const count = await prisma.action.count();
    return count;
  }
  async getWeek() {
    const week = await prisma.action.findMany({
      where: {
        date: {
          gt: new Date(86400 * 7),
        },
      },
    });
    return week;
  }
  async updateAction(action: ActionDTO): Promise<ActionDTO> {
    const result = await prisma.action.upsert({
      where: {
        id: action.id,
      },
      update: {
        name: action.name,
        description: action.description,
        status: action.status,
        day: action.day,
        date: action.date,
      },
      create: {
        name: action.name,
        description: action.description,
        status: action.status,
        day: action.day,
        date: action.date,
      },
    });
    return result;
  }
  async deleteAction(id: number): Promise<any> {
    const result = await prisma.action.delete({
      where: {
        id: id,
      },
    });
    return result;
  }
}
