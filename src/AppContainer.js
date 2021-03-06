import React, { PropTypes } from "react"
import { Link } from "phenomic"

import "./main.css"
//import "./components/uikit/css/core.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import LatestNewsNav from "./components/LatestNewsNav"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />

    <Header>
      <Link to={ '/' }>
        <h1 className="uikit-header-heading">Service manual prototype</h1>
      </Link>
    </Header>

    <Content>
      { props.children }
      <LatestNewsNav />
    </Content>

    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
