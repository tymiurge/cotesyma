import React, {Component} from 'react'
import { Segment, Form } from 'semantic-ui-react'
import FieldBodySelector from './field-body-selector'
import { DataLosingAlert } from './data-losing-alert'
import { Packet, SaveCancelBottomPanel, CancelBottomPanel, WizardHeader } from './../../common'

// TODO: simplify it!!!!!
class NewFieldWizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            typeSelected: false,
            type: '',
            typeDropdownDisabled: false,
            candidateType: null,
            typeReselectionAlertReseted: false,
            typeReselectionAlert: false,
            formState: {},
            onlyCancel: true
        }
    }

    onFieldTypeSelection = fieldType => {
        if (this.state.typeSelected && !this.state.typeReselectionAlertReseted) {
            const updates = {
                typeDropdownDisabled: true,
                candidateType: fieldType,
                typeReselectionAlert: true,
            }
            this.setState(Object.assign({}, this.state, updates))
        } else {
            const updates = {type: fieldType, typeSelected: true}
            this.setState(Object.assign({}, this.state, updates))
        }
    }

    onAlertCancelClick = showAlertFlag => {
        this.setState(
            Object.assign(
                {}, 
                this.state, 
                {
                    candidateType: null,
                    typeDropdownDisabled: false,
                    typeReselectionAlert: false,
                    typeReselectionAlertReseted: showAlertFlag
                }
            )
        )
    }

    onAlertOkClick = showAlertFlag => {
        const reselectedType = this.state.candidateType
        this.setState(
            Object.assign(
                {}, 
                this.state, 
                {
                    candidateType: null,
                    onlyCancel: true,
                    formState: {},
                    typeDropdownDisabled: false,
                    type: reselectedType,
                    typeReselectionAlert: false,
                    typeReselectionAlertReseted: showAlertFlag
                }
            )
        )
    }

    fieldsChangesPipeline = update => {
        const formState = Object.assign({}, this.state.formState, update)
        const newState = Object.assign({}, this.state, {formState, onlyCancel: false})
        this.setState(newState)
    }

    render () {
        /**
         * TODO: move field type selector to common as field-type-selector.js
         * the following options must be available:
         *   string
         *   text
         *   feature-select
         *   single-select
         *   user-select
         *   workflow
         *   multi-select
         */
        const fieldTypes = [
            {text: 'String', value: 'string'},
            {text: 'Single Select', value: 'single-select'},
            {text: 'Text', value: 'text'},
            {text: 'Multyselect', value: 'multi-select'},
            {text: 'Workflow', value: 'Workflow'},
            {text: 'User Select', value: 'user-select'},
            {text: 'User Select', value: 'user-select'}
        ]
        return (
            <Packet>
                <WizardHeader top expanded={true} title={'New Field Wizard'} noIcons/>
                <Segment attached>
                    
                    <Segment>
                        <Form>
                            <Form.Select
                                disabled={this.state.typeDropdownDisabled}
                                options={fieldTypes}
                                placeholder='Type...'
                                onChange={(event, data) => { this.onFieldTypeSelection(data.value) }}
                                value={this.state.type}
                                label={'Select Field Type'}
                            />
                        </Form>
                    </Segment>
                    
                    {
                        this.state.typeReselectionAlert && !this.state.typeReselectionAlertReseted &&
                        <DataLosingAlert onCancelClick={this.onAlertCancelClick} onOkClick={this.onAlertOkClick}/>
                    }
                    {
                        this.state.typeSelected &&
                        // TODO get rid of FieldBodySelector comp - use class method instead
                        <FieldBodySelector
                            fieldType={this.state.type}
                            formValues={this.state.formState}
                            onValueChange={this.fieldsChangesPipeline.bind(this)}
                        />
                    }                    
                </Segment>
                {
                    this.state.onlyCancel
                        ? <CancelBottomPanel
                            color='orange'
                            cancelColor='grey'
                            onCancelClick={this.props.onCancelClick}
                        />
                        : <SaveCancelBottomPanel color='orange' cancelColor='grey' onCancelClick={this.props.onCancelClick}/>
                }
                
            </Packet>
        )
    }
}

export default NewFieldWizard