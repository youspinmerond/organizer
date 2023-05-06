import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ActionDTO } from 'dto/action.dto';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async createAction(body: ActionDTO): Promise<any> {
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
      },
    });
    return res;
  }
}
