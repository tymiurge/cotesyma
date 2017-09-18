import React, { Component } from 'react'
import { Message, Button, Checkbox } from 'semantic-ui-react'
import { Packet } from './../../common'

class DataLosingAlert extends Component {
    constructor (props) {
        super(props)
        this.state={
            flagReseted: false
        }
    }

    onShowFlagChange = (e, data) => {
        this.setState({flagReseted: data.checked})
    }

    render () {
        const { props, state, onShowFlagChange } = this
        return (
            <Message
                warning
                icon='warning sign'
                content={(
                    <Packet>
                        All previously defined data for the field are going to be lost.<p/>
                        <Button color={'green'} size='tiny' onClick={() => props.onOkClick(state.flagReseted)}>Proceed anyway</Button>
                        <Button color={'red'} size='tiny' onClick={() => props.onCancelClick(state.flagReseted)}>Cancel</Button>
                        <Checkbox
                            style={{float: 'right'}}
                            label={<label>Don't show this warning again</label>}
                            onChange={onShowFlagChange}
                            checked={state.flagReseted}
                        />
                    </Packet>
                )}
            />
        )
    }
}

export { DataLosingAlert }
