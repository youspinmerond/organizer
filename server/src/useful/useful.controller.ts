import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsefulService } from './useful.service';

@Controller('api/useful')
export class UsefulController {
  constructor(private readonly usefulService: UsefulService) {}

  @Get(':id')
  async getUseful(@Param('id') id: number) {
    return this.usefulService.getUseful(id);
  }

  @Get()
  async getAll() {
    return this.usefulService.getAll();
  }

  @Post()
  async createUseful(@Body() body: { name: string; content: string }) {
    return this.usefulService.createUseful(body.name, body.content);
  }
}
