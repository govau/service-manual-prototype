import React from "react"

import Page from "../Page"
import HomeTopicNav from "../../components/HomeTopicNav"

const Homepage = (props) => {
  return (
    <div>
      <Page { ...props }>
      </Page>
      <HomeTopicNav />
    </div>
  )
}

export default Homepage
