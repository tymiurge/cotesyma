import React, { Component } from 'react'
import { Segment, Form, TextArea } from 'semantic-ui-react'

class ProductOutward extends Component {

  supplyNameChanges (e) {
    this.props.changePipline({name: e.target.value})
  }

  supplyDescChanges (e) {
    this.props.changePipline({desc: e.target.value})
  }

  render () {
    const { name, desc, changePipeline } = this.props
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Product name</label>
            <input placeholder="Product Name" value={name} onChange={(e) => changePipeline({name: e.target.value})} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea placeholder="Description" autoHeight value={desc} onChange={(e) => changePipeline({desc: e.target.value})} />
          </Form.Field>

        </Form>
      </Segment>
    )
  }
}

export default ProductOutward
