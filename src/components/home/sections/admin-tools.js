import React from 'react'
import { Card, Icon, Item } from 'semantic-ui-react'

const AdminTools = () => {
  return (
    <Card.Group itemsPerRow={3}>
      <Card>
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size="tiny"><Icon name="users" size="huge" color="black" /></Item.Image>
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">Users Managemnt</Item.Header>
                <Item.Description>
                  Manage users access permissions
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
        <Card.Content extra>
          <span>
            234 users
          </span>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default AdminTools
