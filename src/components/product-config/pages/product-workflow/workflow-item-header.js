import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const WorkflowItemHeader = (props) => {
  const { ui, data } = props
  return (
    <Menu
      attached={ui.first ? 'top' : true}
      borderless inverted={ui.expanded}
      color="orange"
    >
      <Menu.Item size="mini" style={{width: '0px'}}>
        <Icon
          name="caret down" link
          color={ui.expanded ? 'white' : 'black'}
          onClick={props.onExpandClick}
        />
      </Menu.Item>
      <Menu.Item style={{width: '0px'}}>
        <Icon name="plus" color={ui.expanded ? 'white' : 'black'} link />
      </Menu.Item>
      <Menu.Item>
        <label>{data.title}</label>
      </Menu.Item>
      <Menu.Menu position="right">
        {
          !ui.first && data.order !== 1 &&
          (
            <Menu.Item>
              <Icon style={{width: '0px'}} name="arrow up"
                color={ui.expanded ? 'white' : 'black'} link
              />
            </Menu.Item>
          )
        }
        {
          !ui.first && !ui.last &&
          (
            <Menu.Item>
              <Icon style={{width: '0px'}} name="arrow down"
                color={ui.expanded ? 'white' : 'black'} link
              />
            </Menu.Item>
          )
        }
        {
          !ui.first &&
          (
            <Menu.Item>
              <Icon style={{width: '0px'}} name="trash"
                color={ui.expanded ? 'white' : 'black'}
                link />
            </Menu.Item>
          )
        }
      </Menu.Menu>
    </Menu>
  )
}

export default WorkflowItemHeader
