import React from "react"

import Page from "../Page"
import HomeTopicNav from "../../components/HomeTopicNav"
import PageAlert from "../../components/PageAlert"

const Homepage = (props) => {
  return (
    <div>
      <Page { ...props }>
      </Page>
      <HomeTopicNav />
			<PageAlert variant='error'>
        <h2>I'm a page alert</h2>
      </PageAlert>
    </div>
  )
}



export default Homepage
