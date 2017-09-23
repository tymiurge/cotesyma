import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, TextArea } from 'semantic-ui-react'

/*
 * TODO think whether it is really needed - lots of problems with synchronizing fields  
 * Represents the base elements of an item: name and description 
 */

const propTypes = {
    onValueChange: PropTypes.func,
    name: PropTypes.string,
    desc: PropTypes.string,
    nameLabel: PropTypes.string,
    descLabel: PropTypes.string,
    namePlaceholder: PropTypes.string,
    descPlaceholder: PropTypes.string,
    as: PropTypes.string // either Segment or Form
}

const defaultProps = {
    name: '',
    desc: '',
    nameLabel: 'Item Name',
    descLabel: 'Item Description',
    namePlaceholder: 'Define Item Name here',
    descPlaceholder: 'Type Item Description here',
    as: 'Segment'
}

const SegmentParent = props => (
    <Segment>
        <FormParent {...props} />
    </Segment>
)

const FormParent = props => {
    const {
        name, desc,
        namePlaceholder, descPlaceholder,
        nameLabel, descLabel, changePipeline
    } = props
    return (
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
                <TextArea
                    placeholder={descPlaceholder}
                    autoHeight
                    value={desc}
                    onChange={(e) => changePipeline({desc: e.target.value})}
                />
            </Form.Field>
        </Form>
    )
}
    


class ItemOutward extends Component {

    changePipeline = change => {
        this.props.onValueChange(change)
    } 

    render () {
        if (this.props.as === 'Segment') return <SegmentParent {...this.props} changePipeline={this.changePipeline} />
        return <FormParent {...this.props} changePipeline={this.changePipeline} />
    }
}

ItemOutward.propTypes = propTypes
ItemOutward.defaultProps = defaultProps

export default ItemOutward
