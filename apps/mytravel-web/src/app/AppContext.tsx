import { RecentTripsRestService } from "@mytravel/communication";
import { createContext, useContext } from "react";

const service = new RecentTripsRestService();
const ServiceContext = createContext(service);

export const useServices = () => {
  return useContext(ServiceContext);
};
