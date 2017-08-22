import React, { Component } from 'react'
import { Table, Icon, Button, Popup, Input } from 'semantic-ui-react'
import { v4 } from 'js-uuid'
import _ from 'lodash'

// TODO use doItemsUpdate (currently defined in updateName) as a function for updating tree

const TreeIcon = (props) => {
  const newProps = _.omit(props, ['expanded'])
  if (props.expanded) return (<Icon name="caret down" {...newProps} />)
  return (<Icon name="caret right" {...newProps} />)
}


const EditCellOperations = props => {
  const { item, onEditClick, onSaveClick, onCancelClick } = props
  return (
    <Table.Cell collapsing textAlign="right">
      {
        item.edit
          ? (<Button.Group basic size="mini">
              <Popup
                trigger={
                  <Button
                    onClick={onSaveClick}
                    icon="check"
                  />
                }
                content="Save changes"
              />
              <Popup
                trigger={<Button onClick={onCancelClick} icon="remove" />}
                content="Cancel"
              />
            </Button.Group>)
          : (<Button.Group basic size="mini">
              <Popup
                trigger={
                  <Button
                    onClick={onEditClick}
                    icon="edit"
                  />
                }
                content="Edit"
              />
            </Button.Group>)
      }
    </Table.Cell>
  )
}

class EditableCell extends Component {

  componentDidUpdate () {
    if (this.props.item.edit) this.nameInput.focus()
  }

  pipelineChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render () {
    // onClick={this.toggleNode.bind(this, item.id)}
    const {
      item,
      leftIntend,
      onNodeStateToggle
    } = this.props

    return (
      <Table.Cell>
        <div style={{marginLeft: leftIntend + 'em'}}>
          {
            item.childrens
            && <TreeIcon
              link
              expanded={item.expanded}
              onClick={onNodeStateToggle}
            />
          }
          {
            item.edit
              ? <Input
                size="small"
                defaultValue={item.name}
                ref={input => { this.nameInput = input }}
                onChange={this.pipelineChange}
              />
              : item.name
            }
        </div>
      </Table.Cell>
    )
  }
}

class ProductFeatures extends Component {

  constructor (props) {
    super(props)
    const list = [
      {
        id: v4(), name: 'Home',
        childrens: [
          {id: v4(), name: 'Favorites'},
          {id: v4(), name: 'Admin tools access'}
        ]
      }, {
        id: v4(), name: 'Products List', childrens: [
          {id: v4(), name: 'CRUD product'},
          {id: v4(), name: 'Filtering products'}
        ]
      }, {
        id: v4(), name: 'Product Config', childrens: [
          {id: v4(), name: 'Otward config'},
          {
            id: v4(), name: 'Fields for tests config', childrens: [
              {id: v4(), name: 'Input type field'},
              {id: v4(), name: 'Combo type field'}
            ]
          },
          {
            id: v4(), name: 'Product features', childrens: [
              {id: v4(), name: 'CRUD parent level feature'},
              {id: v4(), name: 'CRUD child level feature'}
            ]
          }
        ]
      }
    ]
    const data = this.addNodeState(list)
    this.state = {
      data,
      presavedChanges: []
    }
  }

  addNodeState = (nodes) => nodes.map(node => {
    const changes = {edit: false}
    if (node.childrens) {
      changes['expanded'] = true
      changes['childrens'] = this.addNodeState(node.childrens)
    }
    return Object.assign({}, node, changes)
  })

  editRow = (rowId) => {
    const doEditToggle = (rows) => {
      return rows.map(rowData => {
        const changes = {}
        if (rowData.id === rowId) { changes['edit'] = true }
        if (rowData.childrens) {
          changes['childrens'] = doEditToggle(rowData.childrens)
        }
        return Object.assign({}, rowData, changes)
      })
    }
    const newState = doEditToggle(this.state.data);
    this.setState(Object.assign({}, this.state.data, {data: newState}))
  }

  toggleRowEditMode = (rowId) => {
    const doEditToggle = (rows) => {
      return rows.map(rowData => {
        const changes = {}
        if (rowData.id === rowId) { changes['edit'] = !rowData.edit }
        if (rowData.childrens) {
          changes['childrens'] = doEditToggle(rowData.childrens)
        }
        return Object.assign({}, rowData, changes)
      })
    }
    const newState = doEditToggle(this.state.data);
    this.setState(Object.assign({}, this.state.data, {data: newState}))
  }

  presaveNameChange (rowId, newValue) {
    const { presavedChanges } = this.state
    const presaves = presavedChanges.filter(item => item.id !== rowId)
    presaves.push({id: rowId, value: newValue})
    this.setState(Object.assign({}, this.state, {presavedChanges: presaves}))
  }

  updateName (rowId) {
    const { presavedChanges, data } = this.state
    const {value: newValue } = presavedChanges.find(item => item.id === rowId)

    const presaves = presavedChanges.filter(item => item.id !== rowId)
    const doItemsUpdate = (items, updates) => {
      return items.map(item => {
        let changes = {}
        if (item.id === rowId) {
          changes = Object.assign({}, updates)
        }
        if (item.childrens) {
          changes['childrens'] = doItemsUpdate(item.childrens, updates)
        }
        return Object.assign({}, item, changes)
      })
    }
    const newData = doItemsUpdate(data, {name: newValue, edit: false})
    const newState = Object.assign(
      {},
      this.state,
      {
        presavedChanges: presaves,
        data: newData
      }
    )
    this.setState(newState)
  }

  rows = (items, level) => {
    return (
      items.map(item => {
        const intend = item.childrens
          ? (level - 1) * 1.43
          : level * 1.43
        const row = (
          <Table.Row key={item.id}>
            <Table.Cell collapsing>
              <Button.Group basic size="mini">
                <Popup
                  trigger={<Button icon="plus" />}
                  content="Add next"
                />
                <Popup
                  trigger={<Button icon="add square" />}
                  content="Add child"
                />
                <Popup
                  trigger={<Button icon="trash" />}
                  content="Delete"
                />
              </Button.Group>
            </Table.Cell>

            <EditableCell
              leftIntend={intend}
              item={item}
              onNodeStateToggle={this.toggleNode.bind(this, item.id)}
              onChange={(newValue) => this.presaveNameChange(item.id, newValue)}
            />
            <EditCellOperations
              item={item}
              onEditClick={this.toggleRowEditMode.bind(this, item.id)}
              onCancelClick={this.toggleRowEditMode.bind(this, item.id)}
              onSaveClick={this.updateName.bind(this, item.id)}
            />
          </Table.Row>
        )
        return item.childrens && item.expanded
          ? [row].concat(this.rows(item.childrens, level + 1))
          : row
      })
    )
  }

  toggleNode = (rowId) => {
    const doToggle = (nodes) => nodes.map(node => {
      const changes = {}
      if (node.id === rowId) { changes['expanded'] = !node.expanded }
      if (node.childrens) {changes['childrens'] = doToggle(node.childrens) }
      return Object.assign({}, node, changes)
    })
    const newData = doToggle(this.state.data)
    this.setState({data: newData})
  }

  render () {
    return (
      <Table compact="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{' '}</Table.HeaderCell>
            <Table.HeaderCell>Feature Name</Table.HeaderCell>
            <Table.HeaderCell>{' '}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.rows(this.state.data, 1) }
        </Table.Body>
      </Table>
    )
  }

}

export default ProductFeatures
