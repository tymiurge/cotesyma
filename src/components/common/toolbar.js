import React from 'react'
import { Menu, Icon, Popup, Input } from 'semantic-ui-react'

/**
 *  The idea is to keep toolbar as a dump component, therefore no props
 *  management is to be implemented inside a parent component
 *  props:
 *    - onNewItemRequest - func to be called when + is clicked
 *    - onFilterChange - func to be called when value in the filter changes
 *    - creatingNewItem - boolean
 *    - text: obj {
 *        addPopup: str
 *        unlockPopup: str
 *        editColumnsPopup: str
 *        historyPopup: str
 *        filterPlaceholder: str
 *      }
 */

const Toolbar = (props) => {
  const scene = {
    onNewItemRequest: props.onNewItemRequest || (() => {}),
    onFilterChange: props.onFilterChange || (() => {}),
    creatingNewItem: false || props.creatingNewItem,
    text: Object.assign(
      {},
      {
        addPopup: 'Add new item',
        unlockPopup: 'Unlock',
        editColumnsPopup: 'Edit Columns',
        historyPopup: 'Show history',
        filterPlaceholder: 'Filter items...'
      },
      props.text
    )
  }
  const { text } = scene

  return (
    <Menu icon borderless fluid>
      <Menu.Item onClick={!scene.creatingNewItem && scene.onNewItemRequest}>
        <Popup
          trigger={<Icon name="plus" />}
          content={text.addPopup}
          position="bottom center"
        />
      </Menu.Item>
      <Menu.Item>
        <Popup
          trigger={<Icon name="unlock" />}
          content={text.unlockPopup}
          position="bottom center"
        />
      </Menu.Item>
      <Menu.Item>
        <Input
          icon="filter" iconPosition="left"
          placeholder={text.filterPlaceholder}
          transparent style={{width: '300px'}}
          onChange={(e) => { scene.onFilterChange(e.target.value) }}
        />
      </Menu.Item>
      <Menu.Menu icon position="right">
        <Menu.Item>
          <Popup
            trigger={<Icon name="table" />}
            content={text.editColumnsPopup}
            position="top left"
          />
        </Menu.Item>
        <Menu.Item>
          <Popup
            trigger={<Icon name="history" />}
            content={text.historyPopup}
            position="top left"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Toolbar
