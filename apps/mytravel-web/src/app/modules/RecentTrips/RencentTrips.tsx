import { useEffect, useState } from "react";
import { SimpleTeaser, ISimpleTeaserProps, ProgresIndicator } from "@mytravel/common-web";
import { IRecentTrip } from "@mytravel/common-types";
import styles from "./RencentTrips.module.scss";
import { useServices } from "../../AppContext";

export const RecentTrips = () => {
  const [recentTrips, setRecentTrips] = useState([] as ISimpleTeaserProps[]);
  const [isLoading, setIsLoading] = useState(false);
  const services = useServices();

  const mapToTeaserProps = (tripData: IRecentTrip) => {
    const itemProps: ISimpleTeaserProps = {
      id: tripData.id,
      image: tripData.image,
      priceFrom: tripData.price.price,
      priceFromPromo: tripData.price.promoPrice,
      currencySymbol: tripData.price.symbol,
      rating: tripData.rating,
      title: tripData.title,
      teaserInfo: `${tripData.destinationCount} Countries, ${tripData.stayCount} Days`,
    };

    return itemProps;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const recentTrips: IRecentTrip[] = await services.getRecentTrips();
      const res: ISimpleTeaserProps[] = recentTrips.map((item: IRecentTrip) => mapToTeaserProps(item));

      setRecentTrips(res);
      setIsLoading(false);
    };
    fetchData();
  }, [services]);

  const getRecentTrips = () => {
    if (isLoading) {
      return <ProgresIndicator />;
    } else {
      return recentTrips.map((item) => <SimpleTeaser key={item.id} {...item} />);
    }
  };

  return (
    <div className={styles.recentTrips}>
      <h1>Recently viewed trips</h1>
      <div className={styles.recentTrips_items}>{getRecentTrips()}</div>
    </div>
  );
};
