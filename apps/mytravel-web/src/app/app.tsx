// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Layout } from '@mytravel/common-web';
import './app.module.scss';
import { RecentTrips } from './modules/RecentTrips/RencentTrips';

export function App() {
  return (
    <Layout children={<RecentTrips />}></Layout>
  );
}

export default App;
