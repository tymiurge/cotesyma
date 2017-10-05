import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Toolbar, Packet } from './../../common'
import NewFieldWizard from './new-field-wizard'
import FieldWizard from './field-wizard-builder'


const propTypes = {
  newWizardDisplayed: PropTypes.bool,
  testFields: PropTypes.array.isRequired,
  onFetchingFields: PropTypes.func.isRequired,
  onEnteringFieldCreation: PropTypes.func.isRequired,
  onItemAdding: PropTypes.func.isRequired,
  onFieldConfigEdit: PropTypes.func.isRequired
}

class ProductFields extends Component {
 
  constructor (props) {
    super(props)
    this.productId = this.props.match.params.id * 1
}

  componentDidMount () {
    this.props.onFetchingFields(this.productId);
  }

  render () {
    return (
      <Packet>
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
            <NewFieldWizard 
              onCancelClick={this.props.onExitingFieldCreation}
              onSaveClick={data => this.props.onItemAdding(this.productId, data)}
            />
          }
          {
            this.props.testFields.map(fieldConfig =>
              <FieldWizard
                key={'list_item_' + fieldConfig.field}
                formValues={fieldConfig}
                onSaveClick={ fieldValues => this.props.onFieldConfigEdit(this.productId, fieldValues) }
              />
            )
          }
        </Container>
        
      </Packet>
    )
  }
}

ProductFields.propTypes = propTypes

export default ProductFields
