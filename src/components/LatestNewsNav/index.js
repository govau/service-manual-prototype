import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import TileNav from "../TileNav"

const defaultNumberOfPosts = 6

const LatestNewsNav = ( props, { collection } ) => {

  // we generate an array of service topics from all content with topic layout
  const latestNews = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2>
        { "Latest news" }
      </h2>
      <TileNav items={ latestNews } />
    </div>
  )
}

LatestNewsNav.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestNewsNav.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestNewsNav
