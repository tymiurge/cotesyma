import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SaveCancelBottomPanel = props => {
    const color = props.color ? props.color : 'black'
    return (
        <Menu attached borderless size={'tiny'} inverted color={color}>
            <Menu.Item className={'p-left-right-6'}>
                <Button color='green' onClick={ () => {props.onSaveClick({name:'later'})} }>Save</Button>
            </Menu.Item>
            <Menu.Item className={'p-left-0-right-6'}>
                <Button color='red' onClick={ () => {props.onCancelClick()} }>Cancel</Button>
            </Menu.Item>
        </Menu>
    )
}

export default SaveCancelBottomPanel