import React, { PropTypes } from "react"

import "../uikit/css/body.css"
import "../uikit/css/grid-12.css"
import "../uikit/css/headings.css"

const Container = (props) => (
  <div className='uikit-body uikit-grid'>
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
