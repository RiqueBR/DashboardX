import PropTypes from 'prop-types';

const ListItemStyle = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.5rem'
  },
  dateRocketWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  rocketName: {
    fontSize: '0.875rem'
  },
  rocketDate: {
    fontSize: '0.75rem'
  }
};

function ListItem({ launch }) {
  return (
    <li style={ ListItemStyle.wrapper }>
      <p>#{launch.flight_number}</p>
      <p>{launch.mission_name}</p>
      <div style={ ListItemStyle.dateRocketWrapper }>
        <p style={ ListItemStyle.rocketDate }>{launch.launch_date_utc}</p>
        <p style={ ListItemStyle.rocketName }>{launch.rocket.rocket_name}</p>
      </div>
    </li>
  );

};
ListItem.propTypes = {
  launch: PropTypes.object
};

export default ListItem;