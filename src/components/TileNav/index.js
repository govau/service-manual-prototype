import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

const TileNav = ({ topics }) => {
  return (
    <ul className="simonkit-tilenav">
      {
        topics.map(( topic ) => (
          <li key={ topic.title } className="simonkit-tilenav__tile">
            <PagePreview { ...topic } />
          </li>
        ))
      }
    </ul>
  )
}

TileNav.propTypes = {
  topics: PropTypes.array.isRequired,
}

export default TileNav
