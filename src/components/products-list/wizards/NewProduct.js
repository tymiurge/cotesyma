import React, { Component } from 'react'
import ProductOutward from './../sections/product-outward'
import { Segment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { $addProduct } from './../../../actions/product'

const propTypes = {
  onProductAdd: PropTypes.func
}

const stateToProps = null
const dispatchToProps = (dispatch) => ({
  onProductAdd: (product) => { dispatch($addProduct(product)) }
})

class NewProductWizard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      desc: ''
    }
  }

  addProduct () {
    this.props.onProductAdd(this.state)
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
      <Segment inverted color="blue">
        <ProductOutward
          changePipeline={(change) => this.changePipeline(change)} />
        <Segment size="tiny">
          <Button
            as="a" color="blue" size="tiny"
            onClick={this.addProduct.bind(this)}>
            Save
          </Button>
          <Button as="a" color="red" size="tiny">Cancel</Button>
        </Segment>
      </Segment>
    )
  }
}

NewProductWizard.propTypes = propTypes

export default connect(stateToProps, dispatchToProps)(NewProductWizard)
