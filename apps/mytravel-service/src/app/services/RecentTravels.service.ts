import { Injectable, Logger } from '@nestjs/common';
import * as fs from "fs";
import * as path from "path";
import { IMockDataModel } from '../models/MockDataModel';
import { IRecentTrip } from '../models/RecentTrip';

@Injectable()
export class RecentTravelsService {
  getRecentTravels(): IRecentTrip[] {
    try {
      const filePath = path.join(__dirname, "assets/DataFiles/MockData.json");
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        const parsedData = JSON.parse(data) as IMockDataModel;
        return parsedData.recentTravels;
      }
    } catch (error) {
      Logger.error("Retrieveing mock data failed.", error);
    }

    return [];
  }
}
