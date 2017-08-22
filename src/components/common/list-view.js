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
    
    renderTableHeader = () => {
        return this.props.headers.map((header, idx) =>{
            return (
                <Table.HeaderCell key={idx}>
                    {header.title}
                </Table.HeaderCell>
            )    
        })
    }

    render () {
        const headers = [{
            field: 'id', title: 'ID', type: 'id'
        }, {
            field: 'title', title: 'Title', type: 'text'
        }, {
            field: 'features', title: 'Features', type: 'combo'
        }]
        return (
            <Table minimal>
                <Table.Header>
                    <Table.Row>
                        { this.renderTableHeader() }
                    </Table.Row>
                </Table.Header>
            </Table>
        )
    }
}

ItemsList.propTypes = propTypes

export default ItemsList
