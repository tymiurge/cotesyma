import React, { Component } from 'react'
import { Breadcrumb, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { Text } from './../../common'

const HeaderSection = props => {
  const strId = props.title.toLowerCase()
  const isActive = strId === props.currentTab
  return (
    <Breadcrumb.Section
      active={isActive} link={!isActive}>
      <Icon color={isActive ? null : "orange"} name={props.icon} />
      <Text color={isActive ? null : "orange"} content={props.title}
        onClick={() => {props.onClick && props.onClick(strId)} }
      />
    </Breadcrumb.Section>
  )
}

class ProductConfigHeader extends Component {
  
  switchTabTo (tabName) {
    this.props.onTabSwitch && this.props.onTabSwitch(tabName)
  }

  render () {

    const { currentTab } = this.props
    const { productId } = this.props
    return (
      <Menu inverted color="black">
        <Menu.Menu>
          <Menu.Item header>
            <Breadcrumb>
              <Breadcrumb.Section link>
                <Icon name="home" />
                Home
              </Breadcrumb.Section>
              <Breadcrumb.Divider><Icon name="right chevron" color="blue" /></Breadcrumb.Divider>
              <Breadcrumb.Section link>Products</Breadcrumb.Section>
              <Breadcrumb.Divider><Icon name="right chevron" color="blue" /></Breadcrumb.Divider>
              <Breadcrumb.Section active>{this.props.productName + ' Configuration'}</Breadcrumb.Section>
            </Breadcrumb>
          </Menu.Item>
          <Menu.Item header>
            <Breadcrumb>
              <HeaderSection
                title="Outward" icon="info circle" currentTab={currentTab}
                onClick={tabName => { this.switchTabTo(tabName) }}
              />
              <Breadcrumb.Divider><Icon name="chevron circle right" inverted /></Breadcrumb.Divider>
              <HeaderSection
                title="Features" icon="puzzle" currentTab={currentTab}
                onClick={tabName => { this.switchTabTo(tabName) }}
              />
              <Breadcrumb.Divider><Icon name="chevron circle right" inverted /></Breadcrumb.Divider>
              <HeaderSection
                title="Workflow" icon="flag checkered" currentTab={currentTab}
                onClick={tabName => { this.switchTabTo(tabName) }}
              />
              <Breadcrumb.Divider><Icon name="chevron circle right" inverted /></Breadcrumb.Divider>
              <HeaderSection
                title="Fields" icon="hashtag" currentTab={currentTab} 
                onClick={tabName => { this.switchTabTo(tabName) }}
              />
            </Breadcrumb>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="bell" size="large" />
          </Menu.Item>

          <Dropdown item text="Shrek Ogr">
            <Dropdown.Menu>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
  
}

export default ProductConfigHeader
