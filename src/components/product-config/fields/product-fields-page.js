import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Toolbar } from './../../common'
import NewFieldWizard from './new-field-wizard'
import FieldWizardBuilder from './field-wizard-builder'


const propTypes = {
  newWizardDisplayed: PropTypes.bool,
  testFields: PropTypes.array.isRequired,
  onFetchingFields: PropTypes.func.isRequired,
  onEnteringFieldCreation: PropTypes.func.isRequired
}

class ProductFields extends Component {
 
  constructor (props) {
    super(props)
    this.productId = this.props.match.params.id * 1
}

  componentDidMount () {
    this.props.onFetchingFields(this.productId);
  }

  toggleRowExpand (id) {

  }

  render () {
    return (
      <div>
        <Toolbar
          onNewItemRequest={this.props.onEnteringFieldCreation}
          showFilter={false}
          showUnlockBtn={false}
          showHistoryBtn={false}
          showEditColumnsBtn={false}
        />
        <Container style={{marginBottom: '15px'}}>
          {
            this.props.newWizardDisplayed &&
            <NewFieldWizard onCancelClick={this.props.onExitingFieldCreation}/>
          }
          {
            this.props.testFields.map(fieldConfig => <FieldWizardBuilder {...fieldConfig} />)
          }
          
        </Container>
        
      </div>
    )
  }
}

ProductFields.propTypes = propTypes

export default ProductFields
