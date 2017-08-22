import React, { Component } from 'react'
import { Segment, Form, TextArea } from 'semantic-ui-react'

class CycleOutward extends Component {

  supplyNameChanges (e) {
    this.props.onChange({name: e.target.value})
  }

  supplyDescChanges (e) {
    this.props.onChange({desc: e.target.value})
  }

  render () {
    const { name, desc, validationMode } = this.props
    return (
      <Segment>
        <Form>
          <Form.Input
            label="Test cycle name"
            placeholder="Test cycle name"
            error={validationMode && name !== ''}
            value={name}
            onChange={this.supplyNameChanges.bind(this)}
          />

          <Form.Field>
            <label>Description</label>
            <TextArea
              placeholder="Description"
              autoHeight
              value={desc}
              onChange={this.supplyDescChanges.bind(this)} />
          </Form.Field>

        </Form>
      </Segment>
    )
  }
}

export default CycleOutward
