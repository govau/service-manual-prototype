import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

const TileNav = ({ items }) => {
  return (
    <ul className="simonkit-tilenav">
      {
        items.map(( item ) => (
          <li key={ item.title } className="simonkit-tilenav__tile">
            <PagePreview { ...item } />
          </li>
        ))
      }
    </ul>
  )
}

TileNav.propTypes = {
  items: PropTypes.array.isRequired,
}

export default TileNav
