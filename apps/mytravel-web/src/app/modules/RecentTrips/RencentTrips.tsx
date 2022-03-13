import { useEffect, useState } from "react"
import { SimpleTeaser, ISimpleTeaserProps } from "@mytravel/common-web";
import { RecentTripsRestService } from "@mytravel/communication";
import { IRecentTrip } from "@mytravel/common-types";
import styles from "./RencentTrips.module.scss";

export const RecentTrips = () => {

  const [recentTrips, setRecentTrips] = useState([] as ISimpleTeaserProps[]);


  useEffect(() => {
    const fetchData = async () => {
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

      setRecentTrips(res);
    }

    fetchData();
  }, [])

  const getRecentTrips = () => {
    return recentTrips.map(item => <SimpleTeaser {...item} />)
  }

  return (<div className={styles.recentTrips}>
    <h1 className={styles.recentTrips_title}>Recently viewed trips</h1>
    <div className={styles.recentTrips_items}>
      {getRecentTrips()}
    </div>
  </div>)
}
