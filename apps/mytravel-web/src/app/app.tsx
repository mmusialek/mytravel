import { Layout } from "@mytravel/common-web";
import { RecentTripsRestService } from "@mytravel/communication";
import { createContext } from "react";
import "./app.module.scss";
import { RecentTrips } from "./modules/RecentTrips/RencentTrips";



export function App() {
  return (
    <Layout>
        <RecentTrips />
    </Layout>
  );
}

export default App;
