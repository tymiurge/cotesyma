import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import NewCycleWizard from './../wizards/new-test-cycle'
import {
  TestCyclesList, TestCyclesHeader
} from './../sections'
import { Toolbar } from './../../common'

const propTypes = {
  testCycles: PropTypes.array,
  creatingNewCycle: PropTypes.bool,
  onNewCycleRequest: PropTypes.func,
  filter: PropTypes.string,
  onCyclesRequest: PropTypes.func,
  onFilterChange: PropTypes.func,
  onFilterReset: PropTypes.func
}

class TestCyclesPage extends Component {

  componentDidMount () {
    this.props.onCyclesRequest()
  }

  render () {
    const { props } = this
    const {
      creatingNewCycle,
      testCycles,
      filter
    } = props

    return (
      <Container fluid>
        <TestCyclesHeader />
        <Container>
          <Toolbar
            onNewItemRequest={props.onNewCycleRequest}
            onFilterChange={props.onFilterChange}
            creatingNewItem={creatingNewCycle}
            text={{
              addPopup: 'Add new cycle',
              filterPlaceholder: 'Filter cycles...'
            }}
          />
          {creatingNewCycle && <NewCycleWizard />}
          <TestCyclesList
            testCycles={testCycles.filter(tc => tc.name.includes(filter))}
          />
        </Container>
      </Container>
    )
  }
}

TestCyclesPage.propTypes = propTypes

export default TestCyclesPage
