import { Test } from '@nestjs/testing';
import * as fs from "fs";
import { RecentTravelsService } from './RecentTravels.service';
import { Logger } from "@nestjs/common";

jest.mock("fs")

describe('AppService', () => {
  let service: RecentTravelsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [RecentTravelsService],
    }).compile();


    service = app.get<RecentTravelsService>(RecentTravelsService);
  });

  describe('getData', () => {
    it("should call getRecentTravels and get empty list when no mock file found", () => {
      const existsSyncFn = jest.fn().mockReturnValue(false);
      (fs as unknown)["existsSync"] = existsSyncFn;
      const res = service.getRecentTravels();

      expect(res).toBeDefined();
      expect(res.length).toEqual(0);
    });

    it("should call getRecentTravels and return data", () => {
      const existsSyncFn = jest.fn().mockReturnValue(true);
      const readFileSyncFn = jest.fn().mockReturnValue("{ \"recentTravels\": [{\"title\": \"European Quest\"}] }");
      (fs as unknown)["existsSync"] = existsSyncFn;
      (fs as unknown)["readFileSync"] = readFileSyncFn;
      const res = service.getRecentTravels();

      expect(res).toBeDefined();
      expect(res.length).toEqual(1);
    });

    it("should call getRecentTravels and handle error", () => {
      const existsSyncFn = jest.fn().mockImplementation(() => { throw "mock error" });
      (fs as unknown)["existsSync"] = existsSyncFn;

      const errorFn = jest.fn();
      Logger.error = errorFn;

      const res = service.getRecentTravels();

      expect(res).toBeDefined();
      expect(res.length).toEqual(0);
      expect(errorFn).toBeCalledTimes(1);
    });


  });
});
