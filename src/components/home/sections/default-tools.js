import React from 'react'
import { Card, Icon, Item } from 'semantic-ui-react'

const DefaultTools = () => {
  return (
    <Card.Group itemsPerRow={3}>
      <Card link href="/products/">
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size="tiny"><Icon name="cubes" size="huge" color="black" /></Item.Image>
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">Products</Item.Header>
                <Item.Description>
                  Applications under tests
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
        <Card.Content extra>
          <span>
            16 active products
          </span>
        </Card.Content>
      </Card>

      <Card link href="/test-cycles/">
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size="tiny"><Icon name="hourglass one" size="huge" color="black" /></Item.Image>
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">Test Plans</Item.Header>
                <Item.Description>
                  Testing activities
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
        <Card.Content extra>
          <span>
            5 test plans in progress, 3 to do
          </span>
        </Card.Content>
      </Card>

      <Card>
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size="tiny"><Icon name="options" size="huge" color="black" /></Item.Image>
              <Item.Content verticalAlign="middle">
                <Item.Header as="a">Personal settings</Item.Header>
                <Item.Description>
                  Manage account, favorites and other here
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
        <Card.Content extra>
          <span>
            10 reports
          </span>
        </Card.Content>
      </Card>

    </Card.Group>
  )
}

export default DefaultTools
