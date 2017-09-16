import React from 'react'
import { Menu, Icon, Segment, Progress } from 'semantic-ui-react'

/**
 * 
 * @param {*} props object with the following properties:
 *  top - /no-value/ to indicate a wizard rendering this header is the toppest 
 *  title - /str/ the header content
 *  expanded - /boolean/ 
 */
const WizardHeader = props => {
  const attach = props.top ? 'top' : true 
  const expandIcon = props.expanded ? 'angle down' : 'angle right'
  const onExpandIconClick = props.onExpandIconClick || (() => {})
  return (
    <div style={{borderWidth: '0px'}}> 
      <Menu attached={attach} borderless size="large" inverted color="orange">
        <Menu.Item>
          <Icon name={expandIcon} color="black" link onClick={() => { onExpandIconClick() } }/>
        </Menu.Item>
        <Menu.Item className={'p-left-0'}>
          <label>{props.title}</label>
        </Menu.Item>
      </Menu>
      {
        !props.expanded &&
        <Segment className={'wizard-delimiter border-width-0'} attached style={{padding: '0px'}}>
          <Progress percent={100} size="tiny" style={{marginBottom: '0px', borderRadius: '0px'}} color="black" />
        </Segment>
      }
      
    </div>
    
  )
}

export default WizardHeader