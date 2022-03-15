import { IRecentTrip } from "@mytravel/common-types";

export class RecentTripsRestService {

  async getRecentTrips(): Promise<IRecentTrip[]> {
    try {
      const apiRes = await fetch("http://localhost:3333/api/RecentTravels");

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
