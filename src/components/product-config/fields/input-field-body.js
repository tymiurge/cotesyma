import React, {Component} from 'react'
// import { Segment, Form } from 'semantic-ui-react'
import { ItemOutward } from './../../common'

class InputFieldBody extends Component {
    render () {
        return (
            <ItemOutward
                onValueChange={this.props.onValueChange}
                nameLabel={'Field Name'}
                descLabel={'Field Description'}
                namePlaceholder={'Field Name'}
                descPlaceholder={'Field Description'}
                name={this.props.formValues.name}
                desc={this.props.formValues.desc}
            />    
        )
    }
}

export default InputFieldBody