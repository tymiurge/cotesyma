import React from 'react'
import { Menu, Popup, Icon } from 'semantic-ui-react'

const ProductFieldsToolbar = (props) => {
  return (

    <Menu icon borderless fluid>
      <Menu.Item>
        <Popup
          trigger={<Icon name="plus" />}
          content={'Add new'}
          position="bottom center"
        />
      </Menu.Item>
      <Menu.Menu icon position="right">
        <Menu.Item>
          <Popup
            trigger={<Icon name="save" />}
            content={'Save to field scheme'}
            position="top left"
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>


  )
}

export default ProductFieldsToolbar
