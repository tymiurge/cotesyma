import React, {Component} from 'react'
// import { Segment, Form } from 'semantic-ui-react'
import { ItemOutward } from './../../common'

class InputFieldBody extends Component {
    render () {
        return (
            <ItemOutward 
                nameLabel={'Field Name'}
                descLabel={'Field Description'}
                namePlaceholder={'Field Name'}
                descPlaceholder={'Field Description'}
            />    
        )
    }
}

export default InputFieldBody