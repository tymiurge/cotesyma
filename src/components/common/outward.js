import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, TextArea } from 'semantic-ui-react'

/*
 *  Represents the base elements of an item: name and description 
 */

const propTypes = {
    onValueChange: PropTypes.func,
    name: PropTypes.string,
    desc: PropTypes.string,
    nameLabel: PropTypes.string,
    descLabel: PropTypes.string,
    namePlaceholder: PropTypes.string,
    descPlaceholder: PropTypes.string
}

const defaultProps = {
    name: '',
    desc: '',
    nameLabel: 'Item Name',
    descLabel: 'Item Description',
    namePlaceholder: 'Define Item Name here',
    descPlaceholder: 'Type Item Description here'
}

class ItemOutward extends Component {

    changePipeline = change => {
        this.props.onValueChange(change)
    } 

    render () {
        const {
            name, desc,
            namePlaceholder, descPlaceholder,
            nameLabel, descLabel
        } = this.props
        const { changePipeline } = this
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>{nameLabel}</label>
                        <input
                            placeholder={namePlaceholder}
                            value={name}
                            onChange={(e) => changePipeline({name: e.target.value})} />
                    </Form.Field>
                    <Form.Field>
                        <label>{descLabel}</label>
                        <TextArea placeholder={descPlaceholder} autoHeight value={desc} onChange={(e) => changePipeline({desc: e.target.value})} />
                    </Form.Field>
                </Form>
            </Segment>    
        )
    }
}

ItemOutward.propTypes = propTypes
ItemOutward.defaultProps = defaultProps

export default ItemOutward
