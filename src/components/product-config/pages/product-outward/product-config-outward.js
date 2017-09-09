import React, { Component } from 'react'
import { ItemOutward } from './../../../common/'
import { Segment, Form, Menu, Button } from 'semantic-ui-react'

class ProductConfigOutward extends Component {
    render () {
        const workflowSteps = [
      { key: 'd', text: 'Designing ', value: 'design' },
      { key: 'a', text: 'Active', value: 'active' },
      { key: 'c', text: 'Closed', value: 'closed' }
    ]
        return (
            <div>
                <Menu attached="top" borderless>
                    <Menu.Item header>Product Name main details</Menu.Item>
                </Menu>
                <Segment attached>
                    <ItemOutward {...this.props} />
                    <Segment>
                        <Form>
                            <Form.Field >
                                <label>Product Life Cycle</label>
                                <Form.Dropdown
                                    text="Design"
                                    inline selection fluid
                                    options={workflowSteps}
                                />
                            </Form.Field>
                        </Form>
                    </Segment>
                </Segment>
                <Menu attached="bottom" borderless>
                    <Menu.Item>
                        <Button primary>Save</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button danger>Cancel</Button>
                    </Menu.Item>
                </Menu>
                
            </div>
        )
    }
}

export default ProductConfigOutward
