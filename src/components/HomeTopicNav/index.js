import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import TileNav from "../TileNav"


const HomeTopicNav = ( props, { collection } ) => {

  // we generate an array of service topics from all content with topic layout
  const serviceTopics = enhanceCollection(collection, {
    filter: { layout: "Topic" },
  })

  return (
    <div>
      <h2>
        { "Homepage topic list" }
      </h2>
      <TileNav items={ serviceTopics } />
    </div>
  )
}


HomeTopicNav.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default HomeTopicNav
