import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsController } from './actions/actions.controller';
import { ActionsService } from './actions/actions.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PlansService } from './plans/plans.service';
import { PlansController } from './plans/plans.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'client'),
    }),
  ],
  controllers: [AppController, ActionsController, PlansController],
  providers: [AppService, ActionsService, PlansService],
})
export class AppModule {}
