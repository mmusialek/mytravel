import { IRecentTrip } from "@mytravel/common-types";
import { ServiceConst } from "./ServiceConst";

export class RecentTripsRestService {

  async getRecentTrips(): Promise<IRecentTrip[]> {
    try {
      const apiRes = await fetch(`${ServiceConst.BaseApiUrl}RecentTravels`);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (apiRes.ok) {
        return (await apiRes.json()) as IRecentTrip[];
      }
    } catch (error) {
      console.debug("Fetching recent trips from api failed.", error);
    }
    return [];
  }

}
