import React, { Component } from 'react'
import ProductFieldsToolbar from './product-fields-toolbar'
import { Segment, Icon, Form, Progress, Menu, Container } from 'semantic-ui-react'
import { v4 } from 'js-uuid'
import { TagsInput } from './../../common'
import InputFieldBody from './input-field-body'
import NewFieldWizard from './new-field-wizard'

class ProductFields extends Component {
  constructor (props) {
    super(props)
    const list = [
      {
        id: v4(), title: 'Author', type: 'input',
        desc: 'Test creator name', showConfig: false
      },
      {
        id: v4(), title: 'Coverage deepness', type: 'combo',
        desc: 'Identifier of the test complexity', showConfig: false
      }
    ]
    this.state = {
      data: list
    }
  }

  toggleRowExpand (id) {

  }

  render () {
    const options = [
      { key: 'i', text: 'Input', value: 'input' },
      { key: 'ss', text: 'Single Select', value: 'single-select' },
      { key: 'ms', text: 'Multi Select', value: 'multi-select' },
      { key: 'd', text: 'Date', value: 'Date' }
    ]
    const workflowSteps = [
      { key: 'angular', text: 'Angular', value: 'angular' },
      { key: 'css', text: 'CSS', value: 'css' },
      { key: 'design', text: 'Graphic Design', value: 'design' },
      { key: 'ember', text: 'Ember', value: 'ember' },
      { key: 'html', text: 'HTML', value: 'html' },
      { key: 'ia', text: 'Information Architecture', value: 'ia' },
      { key: 'javascript', text: 'Javascript', value: 'javascript' },
      { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
      { key: 'meteor', text: 'Meteor', value: 'meteor' },
      { key: 'node', text: 'NodeJS', value: 'node' },
      { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
      { key: 'python', text: 'Python', value: 'python' },
      { key: 'rails', text: 'Rails', value: 'rails' },
      { key: 'react', text: 'React', value: 'react' },
      { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
      { key: 'ruby', text: 'Ruby', value: 'ruby' },
      { key: 'ui', text: 'UI Design', value: 'ui' },
      { key: 'ux', text: 'User Experience', value: 'ux' }
    ]
    return (
      <div>
        <ProductFieldsToolbar />
        <Container style={{marginBottom: '15px'}}>
          <NewFieldWizard />
          <InputFieldBody />
        </Container>
        <Container>
          {/* ==================================================================*/ }
          <Menu attached="top" borderless size="large" inverted color="orange">
            <Menu.Item>
              <Icon name="settings" color="black" link />
            </Menu.Item>
            <Menu.Item className={'p-left-0'}>
              <label>Author - an input to identify the test creator</label>
            </Menu.Item>
          </Menu>
          {/* ==================================================================*/ }
          <Menu attached borderless size="large" inverted color="orange">
            <Menu.Item>
              <Icon name="settings" color="black" link />
            </Menu.Item>
            <Menu.Item className={'p-left-0'}>
              <label>Author - an input to identify the test creator</label>
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <Icon name="trash" color="black" link />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment attached>
            <Form>
              <Form.Group widths={16}>
                <Form.Select options={options} placeholder="Type" width={4} />
                <Form.Input placeholder="Field Title" width={12} />
              </Form.Group>
              <Form.Group widths={16}>
                <Form.Input placeholder="Field Description" width={16} />
              </Form.Group>
              <Form.Group inline>
                <label style={{width: '130px'}}>* for workflow steps:</label>
                <Form.Dropdown
                  inline multiple selection
                  options={workflowSteps}
                />
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
                  options={workflowSteps}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment attached style={{padding: '0px'}}>
            <Progress percent={100} size="tiny" style={{marginBottom: '0px'}} color="orange" />
          </Segment>

          <Menu attached borderless size="large" inverted color="orange">
            <Menu.Item>
              <Icon name="settings" color="black" link />
            </Menu.Item>
            <Menu.Item>
              <label>Author - an input to identify the test creator</label>
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <Icon name="trash" color="black" link />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment attached>
            <Form>
              <Form.Group widths={16}>
                <Form.Select options={options} placeholder="Type" width={4} />
                <Form.Input placeholder="Field Title" width={12} />
              </Form.Group>
              <Form.Group widths={16}>
                <Form.Input placeholder="Field Description" width={16} />
              </Form.Group>
              <Form.Group inline>
                <label style={{width: '130px'}}>* for workflow steps:</label>
                <Form.Dropdown
                  inline multiple selection
                  options={workflowSteps}
                />
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
                  options={workflowSteps}
                />
              </Form.Group>
            </Form>
          </Segment>
          <Segment attached style={{padding: '0px'}}>
            <Progress percent={100} size="tiny" style={{marginBottom: '0px'}} color="orange" />
          </Segment>
        </Container>
      </div>
    )
  }
}

export default ProductFields
