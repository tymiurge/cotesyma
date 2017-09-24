import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { TagsInput } from './../../common'

class SelectFieldConfig extends Component {

        
    
    render () {
        const { props } = this
        return (
            <Form>
                <Form.Field>
                    <label>Field Title</label>
                    <input
                        disabled={props.system}
                        placeholder='Field Title'
                        value={props.title}
                        onChange={(e) => props.onValueChange({'title': e.target.value})} 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        disabled={props.system}
                        placeholder='Field Description'
                        autoHeight
                        value={props.desc}
                        onChange={(e) => props.onValueChange({'desc': e.target.value})}
                    />
                </Form.Field>
                <TagsInput
                    tags={props.options}
                    label='Options:'
                    labelWidth={50}
                    placeholder="Add an option..."
                    onChange={tags => this.props.onValueChange({tags: tags})}
                />
                <Form.Group inline>
                    <label style={{width: '100px'}}>Default option:</label>
                    <Form.Dropdown
                        inline
                        disabled={props.system}
                        placeholder={'Select value to be used as default'}
                        options={[...props.options, 'N/A'].map(item => ({text: item, value: item}))}
                        text={props.defaultOption}
                        onChange={(e, data) => this.props.onValueChange({default: data.value})}
                    />
                </Form.Group>
            </Form>   
        )
    }
}

export default SelectFieldConfig