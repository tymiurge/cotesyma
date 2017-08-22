import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { HomeHeader, AdminTools, DefaultTools } from './sections'

class Home extends Component {
  render () {
    return (
      <Container fluid>
        <HomeHeader />
        <Container>
          <DefaultTools />
          <AdminTools />
        </Container>
      </Container>

    )
  }
}

export default Home
