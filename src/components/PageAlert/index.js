import React, { PropTypes } from "react"
import classNames from 'classnames';

import "../uikit/css/page-alerts.css"

/**
 * Tiny inline component used to draw attention to an item's state or status.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const PageAlert = ( props ) => {
  let classes = classNames({
    'uikit-page-alerts': true,
    [`uikit-page-alerts--${props.variant}`]: props.variant,
  });

  return (
    <div className={ classes } role='alert'>
      { props.children }
    </div>
  );
};

PageAlert.propTypes = {
  /** Text that appears within the component */
  children: PropTypes.node.isRequired,
  /** Various color schemes */
  variant: PropTypes.oneOf([null, 'info', 'success', 'warning', 'error']),
};


PageAlert.defaultProps = {
  variant: null,
};

export default PageAlert
