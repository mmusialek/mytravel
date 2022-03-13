import { Test, TestingModule } from '@nestjs/testing';

import { RecentTravelsController } from './RecentTravels.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RecentTravelsController],
      providers: [AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to mytravel-service!"', () => {
      const appController = app.get<RecentTravelsController>(RecentTravelsController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to mytravel-service!',
      });
    });
  });
});
