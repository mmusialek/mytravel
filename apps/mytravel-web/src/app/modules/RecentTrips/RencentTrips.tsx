import { useEffect, useState } from "react"
import { SimpleTeaser, ISimpleTeaserProps, ProgresIndicator } from "@mytravel/common-web";
import { RecentTripsRestService } from "@mytravel/communication";
import { IRecentTrip } from "@mytravel/common-types";
import styles from "./RencentTrips.module.scss";

export const RecentTrips = () => {

  const [recentTrips, setRecentTrips] = useState([] as ISimpleTeaserProps[]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);
      const service = new RecentTripsRestService();
      const recentTrips = await service.getRecentTrips();
      const res: ISimpleTeaserProps[] = recentTrips.map((item: IRecentTrip) => {
        const itemProps: ISimpleTeaserProps = {
          image: item.image,
          priceFrom: item.price.price,
          priceFromPromo: item.price.promoPrice,
          currencySymbol: item.price.symbol,
          rating: item.rating,
          title: item.title,
          teaserInfo: `${item.destinationCount} Countries, ${item.stayCount} Days`
        }
        return itemProps
      });

      await new Promise(resolve => setTimeout(resolve, 5000));
      setRecentTrips(res);
      setIsLoading(false);
    }
    fetchData();
  }, [])

  const getRecentTrips = () => {
    if (isLoading) {
      return <ProgresIndicator />
    } else {
      return recentTrips.map(item => <SimpleTeaser {...item} />)
    }
  }

  return (<div className={styles.recentTrips}>
    <h1>Recently viewed trips</h1>
    <div className={styles.recentTrips_items}>
      {getRecentTrips()}
    </div>
  </div>)
}
