import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async createAction(): Promise<number> {
    const res = await prisma.action.create({
      data: {
        name: '123',
        description: '456',
        day: '1',
        date: new Date(),
        status: false,
      },
    });
    console.log(res);
    return 1;
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
