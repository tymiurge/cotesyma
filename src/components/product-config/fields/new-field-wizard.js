import React, {Component} from 'react'
import { Segment, Form } from 'semantic-ui-react'
import WizardHeader from './field-wizard-header'
import FieldBodySelector from './field-wizard-selector'
import { DataLosingAlert } from './data-losing-alert'
import { Packet, ItemOutward, SaveCancelBottomPanel } from './../../common'

class NewFieldWizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            typeSelected: false,
            type: 'Input',
            typeReselectionAlertReseted: false,
            typeReselectionAlert: false
        }
    }

    onFieldTypeSelection = fieldType => {
        if (this.state.typeSelected && this.state.typeReselectionAlertReseted) {
            const updates = {
                typeReselectionAlert: true,
                type: fieldType
            }
            this.setState(Object.assign({}, this.state, updates))
        } else {

        }
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
                {
                !this.state.typeSelected &&
                <Segment attached>
                    <Form>
                        <Form.Select
                            options={fieldTypes}
                            placeholder='Select field type...'
                            onChange={(event, data) => { this.onFieldTypeSelection(data.value) }}
                        />
                    </Form>
                    <DataLosingAlert />
                    <ItemOutward />
                    <FieldBodySelector fieldType={this.state.type} />
                    
                </Segment>
                }
                <SaveCancelBottomPanel color='orange'/>
            </Packet>
        )
    }
}

export default NewFieldWizard