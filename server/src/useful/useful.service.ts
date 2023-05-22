import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class UsefulService {
  async getUseful(id: number) {
    const result = await prisma.useful.findUnique({
      where: {
        id: Number(id),
      },
    });
    return result;
  }
  async createUseful(name: string, content: string) {
    const result = await prisma.useful.create({
      data: {
        name,
        content,
      },
    });
    return result;
  }
  async getAll() {
    const result = await prisma.useful.findMany();
    return result;
  }
}
