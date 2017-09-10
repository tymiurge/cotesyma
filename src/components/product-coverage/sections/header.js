import React from 'react'
import { Breadcrumb, Menu, Icon, Dropdown } from 'semantic-ui-react'

const ProductCoverageHeader = () => {
  return (
    <Menu inverted color="black">
      <Menu.Item>
        <Icon name="home" color="green" size="large" />
      </Menu.Item>

      <Menu.Item header>
        <Breadcrumb>
          <Breadcrumb.Section active>Products</Breadcrumb.Section>
        </Breadcrumb>
      </Menu.Item>

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
  )
}

export default ProductCoverageHeader
