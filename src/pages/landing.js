import { useFetch } from '../utils/hooks/useFetch';
import ListItem from '../components/listItem';
import Layout from '../components/layout';

// Assets
import LaunchImg from '../assets/img/launch-home.png';
import SpaceXLogo from '../assets/spacex-logo.png';

function Landing() {

  const LandingStyles = {
    LaunchImg: {
      gridColumn: '1',
      height: 'auto',
      width: '50%'
    },
    LogoWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      height: '3rem'
    },
    Logo: {
      height: '45%',
      width: '20%',
      alignSelf: 'end'
    },
    LogoWording: {
      alignSelf: 'end',
      margin: '0'
    }
  };

  const MockedLaunches = [
    {
      flight_number: 1,
      mission_name: 'FalconSat',
      launch_date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      launch_success: false,
      rocket : {
        rocket_name: 'Falcon 1'
      }
    },
    {
      flight_number: 2,
      mission_name: 'DemoSat',
      launch_date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      launch_success: true,
      rocket: {
        rocket_name: 'Falcon 1'
      }
    },
    {
      flight_number: 3,
      mission_name: 'TrailBlazer',
      launch_date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      launch_success: false,
      rocket: {
        rocket_name: 'Falcon 9'
      }
    },
    {
      flight_number: 4,
      mission_name: 'RatSat',
      launch_date_utc: '2006-03-24T22:30:00.000Z',
      details: 'Engine failure at 33 seconds and loss of vehicle',
      launch_success: false,
      rocket: {
        rocket_name: 'Falcon 9'
      }
    },
  ];

  return (
    <Layout>
      {/* <h1>DashboardX</h1> */}
      <div style={ LandingStyles.LogoWrapper }>
        <img src={ SpaceXLogo } alt="SpaceX logo" style={ LandingStyles.Logo }/>
        <p style={ LandingStyles.LogoWording }>Launches</p>
      </div>
      <img src={ LaunchImg } alt="Image of a rocket launch" style={ LandingStyles.LaunchImg }/>
      <ul>
        {MockedLaunches.map(launchObj => (
          <ListItem key={ launchObj.flight_number } launch={ launchObj } />
          ))}
      </ul>
    </Layout>
  );
}
export default Landing;