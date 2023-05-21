import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsController } from './actions/actions.controller';
import { ActionsService } from './actions/actions.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlansService } from './plans/plans.service';
import { PlansController } from './plans/plans.controller';
import { UsefulController } from './useful/useful.controller';
import { UsefulService } from './useful/useful.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'client'),
    }),
  ],
  controllers: [
    AppController,
    ActionsController,
    PlansController,
    UsefulController,
  ],
  providers: [AppService, ActionsService, PlansService, UsefulService],
})
export class AppModule {}
