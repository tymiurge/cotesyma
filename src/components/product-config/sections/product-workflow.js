import React, { Component } from 'react'
import WorkflowItem from './../pages/product-workflow/workflow-item'

class ProductWorkflow extends Component {

  constructor (props) {
    super(props)
    const items = [
      {
        id: 0, title: 'Init point',
        order: 0,
        destinations: [
          {
            id: 4, title: 'To Do',
            actions: [
              {name: 'Required fields', type: 'makeFieldsRequired', fields: []},
              {name: 'Set Created at', type: 'setFieldValue', field: 'Created at', value: 'currentTimestamp'}
            ]
          }, {
            id: 5, title: 'Done',
            actions: [
              {name: 'Required Fields', type: 'makeFieldsRequired', fields: []},
              {name: 'Set Done at', type: 'setFieldValue', field: 'Done at', value: 'currentTimestamp'}
            ]
          }
        ]
      },
      {
        id: 1, title: 'To Do',
        order: 1,
        destinations: [
          {
            id: 6, title: 'In Progress',
            actions: [
              {name: 'Required Fields', type: 'makeFieldsRequired', fields: []},
              {name: 'Set in To Do from', type: 'setFieldValue', field: 'in To Do from', value: 'currentTimestamp'}
            ]
          }
        ]
      },
      {
        id: 2, title: 'In Progress',
        order: 2,
        destinations: [
          {
            id: 7, title: 'Done',
            actions: [
              {name: 'Required Fields', type: 'makeFieldsRequired', fields: []},
              {name: 'Set Done at', type: 'setFieldValue', field: 'Done at', value: 'currentTimestamp'}
            ]
          }
        ]
      }
    ]

    const wStates = items
      .sort((a, b) => {
        if (a.order < b.order) return -1
        if (a.ordr > b.order) return 1
        return 0
      })
      .map((item, idx, all) => ({
        data: item,
        ui: {
          expanded: false,
          first: idx === 0,
          last: idx === all.length - 1
        }
      }))
    this.state = {
      wStates
    }
  }

  toggleItemExpand (itemId) {
    const newStates = this.state.wStates.map(w => {
      return w.data.id === itemId
        ? Object.assign(
          {},
          {data: w.data},
          {
            ui: Object.assign({}, w.ui, {expanded: !w.ui.expanded})
          }
          )
        : w
    })
    this.setState(Object.assign({}, this.state, {wStates: newStates}))
  }

  render () {
    return (
      <div>

        {
          this.state.wStates.map((s, idx) => (
            <WorkflowItem
              ui={s.ui} data={s.data}
              onExpandClick={this.toggleItemExpand.bind(this, s.data.id)}
            />
          ))
        }
      </div>
    )
  }
}

export default ProductWorkflow
