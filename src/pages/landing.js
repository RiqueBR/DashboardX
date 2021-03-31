import { useFetch } from '../utils/hooks/useFetch';
import ListItem from '../components/listItem';

function Landing() {

  const res = useFetch('https://api.spacexdata.com/v4/launches', {});
  console.log(res);

  return (
    <h1>DashboardX</h1>
  );
};

export default Landing;