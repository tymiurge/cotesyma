// TODO implement common list view
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
    /**
     * array of objects representing table header; the following properties should be defined:
     *  - field, type, title
     */
    headers: PropTypes.array,
    data: PropTypes.array
}

class ItemsList extends Component {

    constructor (props) {
        super(props)
        const headers = this.props.headers.map((h, idx) => ({
            order: idx,
            field: h.field,
            collapsing: h.type == 'id' || h.type=='combo',
            title: h.title
        }))
        const items = this.props.data.map((item, idx) => 
            [
                ... headers.map(h => ({
                    text: item[h.field],
                    collapsing: h.collapsing
                }))
            ]
        )
        this.state = {
            headers,
            items
        }
    }
    
    renderTableHeader = () => this.state.headers.map(h => (
        <Table.HeaderCell key={h.order} collapsing={h.collapsing}>
            {h.title}
        </Table.HeaderCell>
))

    renderRowCells = row => row.map(cell => (
        <Table.Cell collapsing={cell.collapsing}>
            {cell.text}
        </Table.Cell>
    ))

    renderTableRows = () => this.state.items.map((row, idx) => (
        <Table.Row>
            {this.renderRowCells(row)}
        </Table.Row>
    ))

    render () {
        return (
            <Table minimal>
                <Table.Header>
                    <Table.Row>
                        { this.renderTableHeader() }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.renderTableRows()}    
                </Table.Body>
            </Table>
        )
    }
}

ItemsList.propTypes = propTypes

export default ItemsList
