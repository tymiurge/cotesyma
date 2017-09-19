import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const CancelBottomPanel = props => {
    const color = props.color || 'black'
    const cancelColor = props.cancelColor || 'red'
    const cancelText = props.cancelText || 'Cancel'
    const onCancelClick = props.onCancelClick || (() => {})
    return (
        <Menu attached borderless size={'tiny'} inverted color={color}>
             <Menu.Item className={'p-left-right-6'}>
                <Button color={cancelColor} onClick={onCancelClick}>{cancelText}</Button>
            </Menu.Item>
        </Menu>
    )
}

export default CancelBottomPanel