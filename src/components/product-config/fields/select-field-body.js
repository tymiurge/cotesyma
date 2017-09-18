import React, { Component} from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { TagsInput } from './../../common'

class SingleSelectFieldBody extends Component {


    render () {
        let defaultOptions = [{text: 'No Value', value: 'null'}]
        if (this.props.formValues.tags) {
             const availableOptions= this.props.formValues.tags.map(tag => ({text: tag, value: tag}))
             defaultOptions = defaultOptions.concat(availableOptions)
        }
        return (
            <Segment>
                <Form>
                    <Form.Group widths={16}>
                        <Form.Input
                            placeholder="Field Title"
                            value={this.props.formValues.name}
                            width={16}
                            onChange={(e, data) => this.props.onValueChange({name: data.value})}
                        />
                    </Form.Group>
                    <Form.Group widths={16}>
                        <Form.Input
                            placeholder="Field Description"
                            width={16} 
                            value={this.props.formValues.desc}
                            onChange={(e, data) => this.props.onValueChange({desc: data.value})}
                        />
                    </Form.Group>
                    <TagsInput
                        tags={[]}
                        label="Options:"
                        labelWidth={130}
                        placeholder="Add an option..."
                        onChange={tags => this.props.onValueChange({tags: tags})}
                    />
                    <Form.Group inline>
                        <label style={{width: '130px'}}>Default option:</label>
                        <Form.Dropdown
                            inline
                            placeholder={'Select default value'}
                            options={defaultOptions}
                            onChange={(e, data) => this.props.onValueChange({default: data.value})}
                        />
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}

export default SingleSelectFieldBody