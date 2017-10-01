import React, { Component } from 'react'
import { Form, Input, TextArea } from 'semantic-ui-react'
import { TagsInput } from './../../common'

class SelectFieldConfig extends Component {

    constructor (props) {
        super(props)
        this.state = {
            inputValue: this.props.title || ''
        }
    }
   
    render () {
        const { props } = this
        const options = props.options || []
        return (
            <Form>
                <Form.Field>
                    <label>Field Title</label>
                    <Input 
                        disabled={props.system}
                        placeholder='Field Title'
                        value={this.state.inputValue}
                        onChange={e => { 
                            this.setState(
                                {inputValue: e.target.value}, 
                                props.onValueChange({title: e.target.value})
                            )
                        }} 
                    />
                    
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        disabled={props.system}
                        placeholder='Field Description'
                        autoHeight
                        value={props.desc}
                        onChange={e => props.onValueChange({'desc': e.target.value})}
                    />
                </Form.Field>
                <TagsInput
                    tags={options}
                    label='Options:'
                    labelWidth={50}
                    placeholder="Add an option..."
                    onChange={tags => this.props.onValueChange({options: tags})}
                />
                <Form.Group inline>
                    <label style={{width: '100px'}}>Default option:</label>
                    <Form.Dropdown
                        inline
                        disabled={props.system}
                        placeholder={'Select value to be used as default'}
                        options={[...options, 'N/A'].map(item => ({text: item, value: item}))}
                        text={props.defaultOption}
                        onChange={(e, data) => this.props.onValueChange({default: data.value})}
                    />
                </Form.Group>
            </Form>   
        )
    }
}

export default SelectFieldConfig