import { Test, TestingModule } from '@nestjs/testing';

import { RecentTravelsController } from './RecentTravels.controller';
import { RecentTravelsService } from "../services/RecentTravels.service";


jest.mock("../services/RecentTravels.service")

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [RecentTravelsController],
      providers: [RecentTravelsService],
    }).compile();
  });

  describe('getData', () => {
    it("should call controller getData", () => {
      const appController = app.get<RecentTravelsController>(RecentTravelsController);
      const service = app.get<RecentTravelsService>(RecentTravelsService);
      appController.getData();
      expect(service.getRecentTravels).toBeCalledTimes(1);
    });
  });
});
