import React from 'react'
import { Menu, Icon, Segment, Progress } from 'semantic-ui-react'

const Parent = props => {
  if (props.color === "") {
    return (
      <Menu attached={props.attach} borderless size="large"> {props.children} </Menu>
    )
  }
  return (
    <Menu attached={props.attach} borderless size="large" inverted color={props.color}> {props.children} </Menu>
  )
}

/**
 * 
 * @param {*} props object with the following properties:
 *  top - /no-value/ to indicate a wizard rendering this header is the toppest 
 *  title - /str/ the header content
 *  expanded - /boolean/ 
 *  noIcons - /no-value/ if no icons required
 */
const WizardHeader = props => {

  const attach = props.top ? 'top' : true 
  const expandIcon = props.expanded ? 'angle down' : 'angle right'
  const onExpandIconClick = props.onExpandIconClick || (() => {})
  const labelClassName = props.noIcons ? '' : 'p-left-0'
  const color = props.color || ''
  const inverted = !!color
  
  return (
    <div style={{borderWidth: '0px'}}> 
      <Parent attached={attach} borderless size="large" inverted={inverted} color={color}>
        {
        !props.noIcons &&
        <Menu.Item>
          <Icon name={expandIcon} color="black" link onClick={() => { onExpandIconClick() } }/>
        </Menu.Item>
        }
        <Menu.Item className={labelClassName}>
          <label>{props.title}</label>
        </Menu.Item>
      </Parent>
      {
      !props.expanded && inverted &&
      <Segment className={'wizard-delimiter border-width-0'} attached style={{padding: '0px'}}>
        <Progress percent={100} size="tiny" style={{marginBottom: '0px', borderRadius: '0px'}} color="black" />
      </Segment>
      }
      
    </div>
    
  )
}

export default WizardHeader