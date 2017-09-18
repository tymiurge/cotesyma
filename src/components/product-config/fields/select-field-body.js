import React, { Component} from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { TagsInput } from './../../common'

class SingleSelectFieldBody extends Component {
    render () {
        return (
            <Segment>
                <Form>
                    <Form.Group widths={16}>
                        <Form.Input placeholder="Field Title" width={16} />
                    </Form.Group>
                    <Form.Group widths={16}>
                        <Form.Input placeholder="Field Description" width={16} />
                    </Form.Group>
                    <TagsInput
                        tags={['Option 1', 'Shrek', 'Because', 'Cucumber']}
                        label="Options:"
                        labelWidth={130}
                        placeholder="Add an option..."
                    />
                    <Form.Group inline>
                        <label style={{width: '130px'}}>Default option:</label>
                        <Form.Dropdown
                            inline multiple selection
                            options={[{text: 'A', value: 'A'}, {text: 'B', value: 'B'}]}
                        />
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default SingleSelectFieldBody