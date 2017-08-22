import React from 'react'
import { Menu, Icon, Popup, Input } from 'semantic-ui-react'

const TestCyclesToolbar = (props) => {
  const {
    creatingNewCycle,
    onNewCycleRequest,
    onFilterChange
  } = props
  return (
    <Menu icon borderless compact fluid>
      <Menu.Item onClick={!creatingNewCycle && onNewCycleRequest}>
        <Popup
          trigger={<Icon name="plus" />}
          content="Add new cycle"
          position="bottom center"
        />
      </Menu.Item>
      <Menu.Item>
        <Popup
          trigger={<Icon name="unlock" />}
          content="Unlock cycles for editing"
          position="bottom center"
        />
      </Menu.Item>
      <Menu.Item>
        <Input
          icon="filter" iconPosition="left"
          placeholder="Filter cycles ..."
          transparent style={{width: '300px'}}
          onChange={(e) => { onFilterChange(e.target.value) }}
        />
      </Menu.Item>
      <Menu.Menu icon compact position="right">
        <Menu.Item>
          <Icon name="table" />
          { /* <Popup
            trigger={<Icon name="table" />}
            content="Edit columns"
            position="top left"
          /> */}
        </Menu.Item>
        <Menu.Item>
          <Icon name="history" />
          { /* <Popup
            trigger={<Icon name="history" />}
            content="Show completed cycles"
            position="top left"
          /> */}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TestCyclesToolbar
