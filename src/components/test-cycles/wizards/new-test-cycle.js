import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Segment, Button, Header } from 'semantic-ui-react'
import { $addCycle, $cancelCycleCreation } from './../../../actions'
import CycleOutward from './../sections/cycle-outward'

const propTypes = {
  onCycleAdd: PropTypes.func
}

const stateToProps = null
const dispatchToProps = dispatch => ({
  onCycleAdd: (cycle) => { dispatch($addCycle(cycle)) },
  onCancel: () => { dispatch($cancelCycleCreation()) }
})

class NewCycleWizard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      desc: '',
      validationMode: false
    }
  }

  saveCycle () {
    if (this.state.name === '') {
      this.setState(Object.assign(
        {},
        this.state,
        { validationMode: true }
      ))
    } else {
      this.props.onCycleAdd(this.state)
    }
  }

  changePipeline (change) {
    this.setState(Object.assign(
      {},
      this.state,
      change
    ))
  }

  render () {
    return (
      <div style={{marginTop: '20px'}}>
        <Segment attached="top" inverted>
          <Header as="h4" inverted color="black">
            New Test Cycle
          </Header>
        </Segment>

        <Segment inverted color="black" attached>
          <CycleOutward
            onChange={change => this.changePipeline(change)}
            validationMode={this.state.validationMode}
          />
          <Button
            as="a" color="blue" size="tiny"
            onClick={this.saveCycle.bind(this)}>
            Save
          </Button>
          <Button as="a" color="red" size="tiny"
            onClick={this.props.onCancel}>Cancel</Button>
        </Segment>
      </div>

    )
  }
}

NewCycleWizard.propTypes = propTypes

export default connect(
  stateToProps,
  dispatchToProps
)(NewCycleWizard)
