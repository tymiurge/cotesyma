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
    items: PropTypes.array
}

class ItemsList extends Component {

    renderHeaderRow = headerRowData => 
        headerRowData.map(headerCell => (
            <Table.HeaderCell key={headerCell.order} collapsing={headerCell.collapsing}>
                {headerCell.title}
            </Table.HeaderCell>
        ))
    
    renderRows = rowsData => 
        rowsData.map((row, idx) => (
            <Table.Row key={idx}>
                {this.renderRowCells(row, idx)}
            </Table.Row>
        ))

    renderRowCells = (row, rowIdx) => row.map((cell, idx) => (
        <Table.Cell key={rowIdx + '_' + idx} collapsing={cell.collapsing}>
            {cell.text}
        </Table.Cell>
    ))

    render () {
        const headerRowData = this.props.headers.map((header, idx) => ({
            order: idx,
            field: header.field,
            collapsing: header.type === 'id' || header.type ==='combo',
            title: header.title
        }))
        const rowsData = this.props.items.map((item, idx) => 
            [
                ...headerRowData.map(header => ({
                    text: item[header.field],
                    collapsing: header.collapsing
                }))
            ]
        )
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        { this.renderHeaderRow(headerRowData) }
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.renderRows(rowsData)}    
                </Table.Body>
            </Table>
        )
    }
}

ItemsList.propTypes = propTypes

export default ItemsList
