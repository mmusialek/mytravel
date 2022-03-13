import { Module } from '@nestjs/common';

import { RecentTravelsController } from './controllers/RecentTravels.controller';
import { RecentTravelsService } from './services/RecentTravels.service';

@Module({
  imports: [],
  controllers: [RecentTravelsController],
  providers: [RecentTravelsService],
})
export class AppModule { }
