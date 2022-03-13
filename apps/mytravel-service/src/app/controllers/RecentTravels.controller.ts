import { Controller, Get } from '@nestjs/common';

import { RecentTravelsService } from '../services/RecentTravels.service';

@Controller("RecentTravels")
export class RecentTravelsController {
  constructor(private readonly appService: RecentTravelsService) { }

  @Get()
  getData() {
    return this.appService.getRecentTravels();
  }
}
