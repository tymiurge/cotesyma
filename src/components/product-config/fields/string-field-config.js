import React, {Component} from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class StringFieldConfig extends Component {
    render () {
        const { props } = this
        return (
            <Form>
                <Form.Field>
                    <label>Field Title</label>
                    <input
                        disabled={props.system}
                        placeholder={'Field Title'}
                        value={props.title}
                        onChange={(e) => props.onValueChange({title: e.target.value})} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        disabled={props.system}
                        placeholder={'Field Description'}
                        autoHeight
                        value={props.desc}
                        onChange={(e) => props.onValueChange({desc: e.target.value})}
                    />
                </Form.Field>
            </Form>   
        )
    }
}

export default StringFieldConfig