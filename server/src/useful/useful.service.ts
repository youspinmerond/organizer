import { Injectable } from '@nestjs/common';

@Injectable()
export class UsefulService {
  async getUseful(id: number) {
    return id;
  }
}
