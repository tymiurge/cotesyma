import React, { Component } from 'react'
import { Input, Label, Form, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const propTypes = {
  tags: PropTypes.array.isRequired,
  onTagRemove: PropTypes.func,
  onTagAdd: PropTypes.func,
  label: PropTypes.string,
  labelWidth: PropTypes.number,
  placeholder: PropTypes.string
}

const defaultProps = {
  label: 'Tags',
  labelWidth: 100,
  placeholder: 'Add a tag...'
}

class TagsInput extends Component {

  constructor (props) {
    super(props)
    this.state = {
      tags: props.tags,
      inputValue: ''
    }
  }

  deleteTag = (tag) => {
    const newTags = this.state.tags.filter(t => tag !== t)
    this.setState(
      Object.assign(
        {},
        this.state,
        { tags: newTags }
      ),
      () => { this.props.onTagRemove && this.props.onTagRemove(tag) }
    )
  }

  updateInputValue (e) {
    const newValue = e.target.value
    this.setState(Object.assign(
      {}, this.state, {inputValue: newValue}
    ))
  }

  catchTagSubmit = (e) => {
    return e.key === 'Enter'
      ? (() => {
          const newTag = this.state.inputValue
          const newTags = [...this.state.tags, newTag]
          this.setState(
            Object.assign(
              {},
              this.state,
              {inputValue: '', tags: newTags}
            ),
            () => { this.props.onTagAdd && this.props.onTagAdd(newTag) }
          )
        })()
      : null
  }

  render () {
    const { props } = this
    return (
      <div>
        <Form.Group>
          <Form.Field>
            <label style={{width: props.labelWidth + 'px'}}>{props.label}</label>
          </Form.Field>
          {
            this.state.tags.map(tag => {
              return (
                <Form.Field>
                  <Label size="small">
                    {tag}
                    <Icon name="delete" link onClick={this.deleteTag.bind(this, tag)} />
                  </Label>
                </Form.Field>
              )
            })
          }
          <Form.Field>
            <Input transparent placeholder={props.placeholder}
              value={this.state.inputValue}
              onChange={this.updateInputValue.bind(this)}
              onKeyPress={this.catchTagSubmit}
            />
          </Form.Field>
        </Form.Group>
      </div>
    )
  }
}

TagsInput.propTypes = propTypes
TagsInput.defaultProps = defaultProps

export default TagsInput
