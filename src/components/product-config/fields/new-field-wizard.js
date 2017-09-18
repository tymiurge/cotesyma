import React, {Component} from 'react'
import { Segment, Form } from 'semantic-ui-react'
import FieldBodySelector from './field-wizard-selector'
import { DataLosingAlert } from './data-losing-alert'
import { Packet, SaveCancelBottomPanel, WizardHeader } from './../../common'

class NewFieldWizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            typeSelected: false,
            type: '',
            typeDropdownDisabled: false,
            candidateType: null,
            typeReselectionAlertReseted: false,
            typeReselectionAlert: false
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
            this.changeFieldType(fieldType)
        }
    }

    changeFieldType = fieldType => {
        const updates = {type: fieldType, typeSelected: true}
        this.setState(Object.assign({}, this.state, updates))
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
                    typeDropdownDisabled: false,
                    type: reselectedType,
                    typeReselectionAlert: false,
                    typeReselectionAlertReseted: showAlertFlag
                }
            )
        )
    }

    render () {
        const fieldTypes = [
            {text: 'Input', value: 'Input'},
            {text: 'Single Select', value: 'Single Select'},
            {text: 'Multyselect', value: 'Multyselect'},
            {text: 'Workflow', value: 'Workflow'}
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
                        <FieldBodySelector fieldType={this.state.type} />
                    }                    
                </Segment>
                <SaveCancelBottomPanel color='orange'/>
            </Packet>
        )
    }
}

export default NewFieldWizard