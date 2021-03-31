import PropTypes from 'prop-types';

function ListItem({ launch }) {
  return (
    <h3>There'll be a list here</h3>
  );

};
ListItem.propTypes = {
  launch: PropTypes.object
};

export default ListItem;