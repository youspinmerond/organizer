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
import { ActionsService } from './actions.service';
import { ActionDTO } from 'dto/action.dto';
import { Response } from 'express';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  description: z.string().min(4),
  day:
    z.literal('1') ||
    z.literal('2') ||
    z.literal('3') ||
    z.literal('4') ||
    z.literal('5'),
  date: z.number().min(13),
  status: z.boolean(),
});

@Controller('api/actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Get()
  abc() {
    return { message: 'You have to specify id in path.' };
  }
  @Get(':id')
  async getAction(
    @Param('id') id: number | 'len' | 'week',
  ): Promise<{ message: string } | { length: number } | ActionDTO> {
    const isSucces = !isNaN(Number(id));

    if (!isSucces) {
      if (id === 'len') {
        const len = await this.actionsService.getLength();
        return { length: len };
      }
      if (id === 'week') {
        return this.actionsService.getWeek();
      }
      return { message: 'path must be integer or "len".' };
    }

    const result = await this.actionsService.getAction(id as number);
    if (result === null) return { message: 'Action not been found.' };
    return result;
  }
  @Post()
  async createAction(
    @Body() body: ActionDTO,
    @Res() res: Response,
  ): Promise<void> {
    const status = schema.safeParse(body);
    if (status.success === true) {
      const result = await this.actionsService.createAction(body);
      res.status(201);
      res.json({ message: 'succes', result: result });
    } else {
      res.status(400);
      res.json(status);
    }
  }
  @Put(':id')
  async updatePlan(@Param('id') id, @Body() body: ActionDTO) {
    const status = schema.safeParse(body);
    if (!status.success) return status;

    const result = await this.actionsService.updateAction({
      id: Number(id),
      ...body,
    });
    console.log(result);
    return result;
  }
  @Delete(':id')
  deletePlan(@Param('id') id) {
    return this.actionsService.deleteAction(Number(id));
  }
}
