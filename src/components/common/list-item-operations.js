import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const OperationsCell = (props) => {
  const scene = {
    configured: false || props.configured,
    onConfigClick: props.onConfigClick || (() => {}),
    onGoClick: props.onGoClick || (() => {})
  }
  return (
    <Table.Cell collapsing textAlign="left">
      {
        scene.configured
          ? (<div>
            <Button
              icon="settings" size="small"
              onClick={scene.onConfigClick}
            />
            <Button icon="arrow right" size="small" />
          </div>)
          : (<Button
            icon="settings" size="small" color="red"
            onClick={scene.onConfigClick}
          />)
      }
    </Table.Cell>
  )
}

export default OperationsCell
