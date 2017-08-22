import React, { Component } from 'react'
import './../App.css'
import { TextArea, Form, Breadcrumb, Grid, Menu, Container, Card, Icon, Item, Input, Dropdown, Table, Popup, Button, Segment, Sidebar, Header } from 'semantic-ui-react'

class ProductCoverage extends Component {
  render () {
    return (
      <Container fluid>
        <Menu stackable inverted>
          <Menu.Item>
            <Icon name="home" color="red" />
          </Menu.Item>

          <Menu.Menu>
            <Menu.Item header>
              <Breadcrumb>
                <Breadcrumb.Section link>Products</Breadcrumb.Section>
                <Breadcrumb.Divider><Icon name="right chevron" color="blue" /></Breadcrumb.Divider>
                <Breadcrumb.Section active>Cotesyma</Breadcrumb.Section>
              </Breadcrumb>
            </Menu.Item>
            <Menu.Item active><Icon name="umbrella" /></Menu.Item>
            <Menu.Item><Icon name="cubes" /></Menu.Item>
            <Menu.Item><Icon name="map pin" /></Menu.Item>
            <Menu.Item><Icon name="settings" /></Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="bell" size="large" />
            </Menu.Item>

            <Dropdown item text="Shrek Ogr">
              <Dropdown.Menu>
                <Dropdown.Item>Sign out</Dropdown.Item>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <Container>
          <div>
            <Menu>
              <Menu.Item><Icon name="plus" /></Menu.Item>
              <div className="ui  aligned category search item">
                <div className="ui transparent icon input">
                  <input className="prompt" type="text" placeholder="Search tests by name" />
                  <i className="filter link icon" />
                </div>
              </div>
              <Menu.Item><Icon name="search" /></Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item><Icon name="table" /></Menu.Item>
              </Menu.Menu>
            </Menu>

            <Table celled striped compact>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Objective</Table.HeaderCell>
                  <Table.HeaderCell>Module</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>
                    End-to-end
                  </Table.Cell>
                  <Table.Cell>Add test</Table.Cell>
                  <Table.Cell>Validate test adding flow ends successfully</Table.Cell>
                  <Table.Cell collapsing>Product Tests</Table.Cell>
                  <Table.Cell collapsing>To Update</Table.Cell>
                  <Table.Cell collapsing>
                    <Icon name="arrow circle right" />
                    <Icon name="remove circle" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing>
                    Operation
                  </Table.Cell>
                  <Table.Cell>Test addition</Table.Cell>
                  <Table.Cell>Assert results of test adding</Table.Cell>
                  <Table.Cell collapsing>Product Tests</Table.Cell>
                  <Table.Cell collapsing>To Update</Table.Cell>
                  <Table.Cell collapsing>
                    <Icon name="arrow circle right" />
                    <Icon name="remove circle" />
                  </Table.Cell>
                </Table.Row>

              </Table.Body>
            </Table>
          </div>
        </Container>
      </Container>
    )
  }
}

export default ProductCoverage
