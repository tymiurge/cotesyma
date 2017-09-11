import React from 'react'
import { Segment, Menu, Form, Button } from 'semantic-ui-react'
import { TagsInput } from './../../common'

const NewTestWizard = props => {
    return (
        <div>
            <Menu attached="top" borderless size="large" inverted color="black">
                <Menu.Item>
                    <label>New Test</label>
                </Menu.Item>
            </Menu>
            <Segment attached>
                <Form>
                    <Form.Group widths={16}>
                        <Form.Input placeholder="Test Name" width={16} />
                    </Form.Group>
                    <Form.Group widths={16}>
                        <Form.Input placeholder="Test Objective" width={16} />
                    </Form.Group>
                    <Form.Group widths={16}>
                        <Form.Input placeholder="Features" width={4} />
                    </Form.Group>
                    <TagsInput
                        tags={['Option 1', 'Shrek', 'Because', 'Cucumber']}
                        label="Tags:"
                        labelWidth={50}
                        placeholder="Add an option..."
                    />    
                </Form>
            </Segment>
            <Menu attached borderless size={'tiny'} inverted color="black">
                <Menu.Item className={'p-left-right-6'}>
                  <Button color='green' onClick={ () => {props.onSaveClick({name:'later'})} }>Save</Button>
                </Menu.Item>
                <Menu.Item className={'p-left-0-right-6'}>
                  <Button color='red' onClick={ () => {props.onCancelClick()} }>Cancel</Button>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default NewTestWizard
