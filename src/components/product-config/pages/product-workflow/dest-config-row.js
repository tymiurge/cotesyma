import React from 'react'
import { Table, Button, Dropdown } from 'semantic-ui-react'

const DestinationConfigRow = props => {
    const { data } = props
    const { parent: isFirstRow } = data
    return (
        <Table.Row>
            { 
            isFirstRow &&
                <DestOperationsCell rowSpan={data.actionsAmount} />
            }
            {
            isFirstRow &&
                <DestCell rowSpan={data.actionsAmount} />
            }
            <ActionsOperationsCell />
            <Table.Cell>{data.actionName}</Table.Cell>
            <ActionShowDetailsCell />
            {
            isFirstRow &&
            <ActionDetailsCell owSpan={data.actionsAmount} />
            }
        </Table.Row>    
    )
}

export { DestinationConfigRow }

const DestOperationsCell = (props) => (
    <Table.Cell collapsing rowSpan={props.rowSpan}>
        <Button.Group basic size="tiny">
        <Button icon="plus" />
        <Button icon="trash" />
        </Button.Group>
    </Table.Cell>    
)

const DestCell = (props) => (
    <Table.Cell rowSpan={props.rowSpan}>
        <Dropdown
            placeholder="Select a workflow state"
            selection
            options={[
                { key: 'AL', value: 'AL', text: 'Alabama' },
                { key: 'TX', value: 'TX', text: 'Texas' },
                { key: 'NY', value: 'NY', text: 'New York' }
            ]}
        />
    </Table.Cell>    
)

const ActionsOperationsCell = props => (
    <Table.Cell collapsing>
        <Button.Group basic size="tiny">
            <Button icon="plus" />
            <Button icon="trash" />
        </Button.Group>
    </Table.Cell>    
)

const ActionShowDetailsCell = props => (
    <Table.Cell collapsing>
        <Button.Group basic size="tiny">
            <Button icon="arrow right" />
        </Button.Group>
    </Table.Cell>    
)

const ActionDetailsCell = props => (
    <Table.Cell rowSpan={props.rowSpan}>A</Table.Cell>    
)
