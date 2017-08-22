import React from 'react'
import { Table } from 'semantic-ui-react'
import { OperationsCell } from './../../common'

const TestCyclesList = (props) => {
  return (
    <Table celled striped compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">
            Status
          </Table.HeaderCell>
          <Table.HeaderCell>
            Name
          </Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          props.testCycles.map((t, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.Cell collapsing textAlign="center">
                  {t.status}
                </Table.Cell>
                <Table.Cell>{t.name}</Table.Cell>
                <OperationsCell {...t} />
              </Table.Row>
            )
          })
        }
      </Table.Body>

    </Table>
  )
}

export default TestCyclesList
