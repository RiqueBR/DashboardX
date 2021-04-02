/*
  Handles the overall page layout (e.g. positioning and spacing of elements)
*/
import PropTypes from 'prop-types';

const LayoutStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr'
};

const Layout = ({ children, ...props }) => {

  return (
    <div style={ LayoutStyles }>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
};

export default Layout;