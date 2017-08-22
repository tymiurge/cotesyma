import React, { Component } from 'react'
import './../App.css'
import { Select, TextArea, Form, Breadcrumb, Grid, Menu, Container, Card, Icon, Item, Input, Dropdown, Table, Popup, Button, Segment, Sidebar, Header } from 'semantic-ui-react'

class TestWizard extends Component {
  render () {
    return (
      <Container fluid>
        <Menu inverted>
          <Menu.Item>
            <Icon name="arrow circle left" color="red" />
          </Menu.Item>
          <Menu.Item header>
            <Breadcrumb>
              <Breadcrumb.Section link>Products</Breadcrumb.Section>
              <Breadcrumb.Divider><Icon name="arrow right" color="blue" /></Breadcrumb.Divider>
              <Breadcrumb.Section link>Cotesyma</Breadcrumb.Section>
              <Breadcrumb.Divider><Icon name="arrow right" color="blue" /></Breadcrumb.Divider>
              <Breadcrumb.Section link>Tests</Breadcrumb.Section>
              <Breadcrumb.Divider><Icon name="arrow right" color="blue" /></Breadcrumb.Divider>
              <Breadcrumb.Section active>Add test</Breadcrumb.Section>
            </Breadcrumb>
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="Shrek Ogr">
              <Dropdown.Menu>
                <Dropdown.Item>Sign out</Dropdown.Item>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <Container>
          <Segment>
            <Form>
              <Grid fluid>
                <Grid.Row>
                  <Grid.Column width={12}>
                    <Form.Field>
                      <label>Test name</label>
                      <input placeholder="Test Name" />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Form.Field>
                      <label>Test type</label>
                      <Select placeholder='Select test type' options={[
                        {text: 'End-to-end', value: 'end-to-end'},
                        {text: 'Operation', value: 'operation'}]} />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Form.Field>
                <label>Objective</label>
                <TextArea placeholder="Objective" autoHeight />
              </Form.Field>
            </Form>
          </Segment>
          
        </Container>
      </Container>
    )
  }
}

export default TestWizard
