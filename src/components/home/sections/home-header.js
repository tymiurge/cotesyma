import React from 'react'
import { Menu, Icon, Dropdown } from 'semantic-ui-react'

const HomeHeader = () => {
  return (
    <Menu stackable inverted color="black">
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

export default HomeHeader
