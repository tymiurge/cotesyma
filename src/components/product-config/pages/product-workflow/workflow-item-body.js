import React, { Component } from 'react'
import { Segment, Table } from 'semantic-ui-react'
import { DestinationConfigRow } from './dest-config-row'

class WorkflowItemBody extends Component {
  
  render () {
    return (
      <Segment attached>
        <Table celled structured compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing></Table.HeaderCell>
              <Table.HeaderCell collapsing>Destinations</Table.HeaderCell>
              <Table.HeaderCell colSpan="3" collapsing>Actions</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { 
              [...(function* iterator (data) {
                for (let destDetails of data) {
                  let destDetailsReported = false
                  for (let actionDetails of destDetails.actions) {
                      let obj = {
                          actionName: actionDetails.name,
                          actionId: actionDetails.id
                      }
                      if (!destDetailsReported) {
                          obj = Object.assign({}, obj, {
                              destinationTitle: destDetails.title,
                              actionsAmount: destDetails.actions.length,
                              destinationId: destDetails.id,
                              parent: true
                          })
                          destDetailsReported = true
                      }
                      yield ( <DestinationConfigRow data={obj} /> )
                  }
                }
              })(this.props.data.destinations)
            ] 
          }
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default WorkflowItemBody
