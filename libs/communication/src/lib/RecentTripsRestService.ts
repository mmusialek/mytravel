import { IRecentTrip } from "@mytravel/common-types";

export class RecentTripsRestService {

  async getRecentTrips(): Promise<IRecentTrip[]> {
    try {
      const apiRes = await fetch("http://localhost:3333/api/RecentTravels");
      if (apiRes.ok) {
        return await apiRes.json() as IRecentTrip[];
      }
    } catch (error) {
      console.debug("Fetching recent trips from api failed.", error);
    }
    return [];

    const mockData: IRecentTrip[] = [{
      image: { imagePath: "/assets/img/beach-holiday-italian-riviera-best-of-we-d-love-to-visit-a-quiet-italian-town-by-the-sea-in-september-of-beach-holiday-italian-riviera.jpg", alt: "Italian riviea" },
      stayCount: 25,
      destinationCount: 11,
      title: "European Quest",
      rating: 4.6,
      price: {
        price: 3.385,
        promoPrice: 2.877,
        currency: "EUR",
        symbol: "€"
      }
    },
    {
      image: { imagePath: "/assets/img/Gondola-trip.jpg", alt: "Simply Italy - gondola" },
      stayCount: 15,
      destinationCount: 2,
      title: "Simply Italy",
      rating: 4.4,
      price: {
        price: 2.155,
        promoPrice: 1.832,
        currency: "EUR",
        symbol: "€"
      }
    },
    {
      image: { imagePath: "/assets/img/ExpatExplore_Water.jpg", alt: "Italian Espresso - coffee" },
      stayCount: 10,
      destinationCount: 1,
      title: "Italian Espresso",
      rating: 3.5,
      price: {
        price: 1.465,
        promoPrice: 1.245,
        currency: "EUR",
        symbol: "€"
      }
    },
    ]

    return Promise.resolve(mockData);
  }

}
