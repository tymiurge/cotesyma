import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { OperationsCell } from './../../common'

export const ProductsTable = (props) => {
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
          props.products.map((p, idx) => {
            return (
              <Table.Row key={idx}>
                <Table.Cell collapsing textAlign="center">
                  <Icon name="circle" color="green" size="large" />
                </Table.Cell>
                <Table.Cell>{p.name}</Table.Cell>
                <OperationsCell
                  configured={p.configured}
                  onConfigClick={() => props.onConfigClick(p.id)}
                />
              </Table.Row>
            )
          })
        }
      </Table.Body>

    </Table>
  )
}
