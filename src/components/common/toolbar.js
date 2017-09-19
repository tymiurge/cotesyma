import React, { Component } from 'react'
import { Menu, Icon, Popup, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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

const propTypes = {
  onNewItemRequest: PropTypes.func,
  onFilterChange: PropTypes.func,
  creatingNewItem: PropTypes.bool,
  text: PropTypes.shape({
    addPopup: PropTypes.string,
    unlockPopup: PropTypes.string,
    editColumnsPopup: PropTypes.string,
    historyPopup: PropTypes.string,
    filterPlaceholder: PropTypes.string
  }),
  showAddBtn: PropTypes.bool,
  showUnlockBtn: PropTypes.bool,
  showFilter: PropTypes.bool,
  showEditColumnsBtn: PropTypes.bool,
  showHistoryBtn: PropTypes.bool
}

const defaultProps = {
  onNewItemRequest: () => {},
  onFilterChange: () => {},
  creatingNewItem: false,
  text: {
    addPopup: 'Add new item',
    unlockPopup: 'Unlock',
    editColumnsPopup: 'Edit Columns',
    historyPopup: 'Show history',
    filterPlaceholder: 'Filter items...'
  },
  showAddBtn: true,
  showUnlockBtn: true,
  showFilter: true,
  showEditColumnsBtn: true,
  showHistoryBtn: true
}

class Toolbar extends Component {
  render () {
    const { props } = this
    return (
      <Menu icon borderless fluid>
        {
          props.showAddBtn &&
          <Menu.Item onClick={!props.creatingNewItem && props.onNewItemRequest}>
            <Popup
              trigger={<Icon name="plus" />}
              content={props.text.addPopup}
              position="bottom center"
            />
          </Menu.Item>
        }
        {
          props.showUnlockBtn &&
          <Menu.Item>
            <Popup
              trigger={<Icon name="unlock" />}
              content={props.text.unlockPopup}
              position="bottom center"
            />
          </Menu.Item>
        }
        {
          props.showFilter &&
          <Menu.Item>
            <Input
              icon="filter" iconPosition="left"
              placeholder={props.text.filterPlaceholder}
              transparent style={{width: '300px'}}
              onChange={(e) => { props.onFilterChange(e.target.value) }}
            />
          </Menu.Item>
        }
        
        <Menu.Menu icon position="right">
          {
            props.showEditColumnsBtn &&
            <Menu.Item>
              <Popup
                trigger={<Icon name="table" />}
                content={props.text.editColumnsPopup}
                position="top left"
              />
            </Menu.Item>
          }
          {
            props.showHistoryBtn &&
            <Menu.Item>
              <Popup
                trigger={<Icon name="history" />}
                content={props.text.historyPopup}
                position="top left"
              />
            </Menu.Item>
          }
        </Menu.Menu>
      </Menu>
    )
  }
}

Toolbar.propTypes = propTypes
Toolbar.defaultProps = defaultProps

export default Toolbar
