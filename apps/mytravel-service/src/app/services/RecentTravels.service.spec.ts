import { Test } from '@nestjs/testing';

import { RecentTravelsService } from './RecentTravels.service';

describe('AppService', () => {
  let service: RecentTravelsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [RecentTravelsService],
    }).compile();

    service = app.get<RecentTravelsService>(RecentTravelsService);
  });

  describe('getData', () => {
    it('should return "Welcome to mytravel-service!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to mytravel-service!',
      });
    });
  });
});
