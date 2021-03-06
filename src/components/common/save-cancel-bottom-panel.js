import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SaveCancelBottomPanel = props => {
    const color = props.color || 'black'
    const cancelColor = props.cancelColor || 'red'
    const okColor = props.okColor || 'green'
    const cancelText = props.cancelText || 'Cancel'
    const okText = props.okText || 'Save'
    const onCancelClick = props.onCancelClick || (() => {})
    const onOkClick = props.onOkClick || (() => {})
    return (
        <Menu attached borderless size={'tiny'} inverted color={color}>
            <Menu.Item className={'p-left-right-6'}>
                <Button color={okColor} onClick={onOkClick}>{okText}</Button>
            </Menu.Item>
            <Menu.Item className={'p-left-0-right-6'}>
                <Button color={cancelColor} onClick={onCancelClick}>{cancelText}</Button>
            </Menu.Item>
        </Menu>
    )
}

export default SaveCancelBottomPanel