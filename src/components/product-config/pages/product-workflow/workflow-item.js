import React from 'react'
import WorkflowItemHeader from './workflow-item-header'
import WorkflowItemBody from './workflow-item-body'
import { Segment, Progress } from 'semantic-ui-react'

const WorkflowItem = (props) => {
  return (
    <div style={{border: '0px'}}>
      <WorkflowItemHeader {...props} />
      {
        props.ui.expanded &&
        (<WorkflowItemBody {...props} />)
      }
      {
        props.ui.expanded &&
        (
          <Segment attached style={{padding: '0px'}}>
            <Progress percent={100} size="tiny" style={{marginBottom: '0px'}} color="orange" />
          </Segment>
        )
      }
    </div>

  )
}

export default WorkflowItem
