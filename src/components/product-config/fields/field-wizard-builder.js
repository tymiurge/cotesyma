import React, { Component } from 'react'
import { Packet, WizardHeader } from './../../common'
import FieldBodySelector from './field-body-selector.js'


class FieldWizardBuilder extends Component {

    constructor (props) {
        super(props)
        this.state = {
            expanded: false
        }
    }

    toggleWizardExpand = () => {
        this.setState(Object.assign({}, this.state, {expanded: !this.state.expanded}))
    }

    render () {
        const { props } = this
        return (
            <Packet>
                <WizardHeader
                    expanded={this.state.expanded}
                    title={this.props.title}
                    onExpandIconClick={this.toggleWizardExpand}
                />
                { /*<FieldBodySelector />*/ }

            </Packet>
        )
    }
}

export default FieldWizardBuilder