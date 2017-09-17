import React from 'react'
import { Message, Button, Checkbox } from 'semantic-ui-react'
import { Packet } from './../../common'

const Content = props => (
    <Packet>
        All the new field data, except of the field name and the field description, are going to be lost.<p/>
        <Button color={'green'} size='tiny' onClick={props.onSaveClick}>Proceed anyway</Button>
        <Button color={'red'} size='tiny' onClick={props.onCancelClick}>Cancel</Button>
        <Checkbox style={{float: 'right'}} label={<label>Don't show this warning again</label>} />
    </Packet>
)

const DataLosingAlert = props => (
    <Message {...props}
        warning
        icon='warning sign'
        content={<Content />}
    />
)

export { DataLosingAlert }