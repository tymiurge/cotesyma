import React, {Component} from 'react'
import { Form, TextArea, Input } from 'semantic-ui-react'

class StringFieldConfig extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: this.props.title || '',
            descValue: this.props.desc || ''
        }
    }
    render () {
        // TODO get rid of the controlled/uncontrolled warning
        // TODO fix opening non system string field in fields grid (no values are displayed)
        const { props } = this
        return (
            <Form>
                <Form.Field>
                    <label>Field Title</label>
                    <Input 
                        disabled={props.system}
                        placeholder={'Field Title'}
                        value={this.state.inputValue}
                        onChange={e => 
                            this.setState(
                                Object.assign({}, this.state, {inputValue: e.target.value}),
                                props.onValueChange({title: e.target.value})
                            )
                        }
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        disabled={props.system}
                        placeholder={'Field Description'}
                        autoHeight
                        value={this.state.descValue}
                        onChange={e => 
                            this.setState(
                                Object.assign({}, this.state, {descValue: e.target.value}),
                                props.onValueChange({desc: e.target.value})
                            )
                        }
                    />
                </Form.Field>
            </Form>   
        )
    }
}

export default StringFieldConfig