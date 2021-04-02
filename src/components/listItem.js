import PropTypes from 'prop-types';

function ListItem({ launch }) {
  return (
    <li>
      <p>Flight number: {launch.flight_number}</p>
      <p>Mission name: {launch.mission_name}</p>
      <p>Date: {launch.launch_date_utc}</p>
      <p>Rocket name: {launch.rocket.rocket_name}</p>
    </li>
  );

};
ListItem.propTypes = {
  launch: PropTypes.object
};

export default ListItem;