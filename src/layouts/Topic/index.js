import React, { PropTypes } from "react"

import Page from "../Page"

import "./index.css"

const Topic = (props) => {

  const pageDescription = props.head.description

  return (
    <Page
      { ...props }
      header={
        <div>
          <header className='abstract'>
            <h2 className="uikit-display-3">{ pageDescription }</h2>
          </header>
        </div>
      }
    >

    </Page>
  )
}

Topic.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Topic
