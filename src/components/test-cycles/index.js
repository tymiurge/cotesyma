import { connect } from 'react-redux'
import TestCyclesPage from './pages/test-cycles'
import {
  $newTestCycleRequest,
  $testCyclesRequest,
  $setTestCyclesFilter,
  $resetTestCyclesFilter
} from './../../actions/test-cycles-actions'

const mapStateToProps = (state) => {
  const { testCycles } = state
  return {
    testCycles: testCycles.cycles,
    creatingNewCycle: testCycles.creatingNewCycle,
    filter: testCycles.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewCycleRequest: () => { dispatch($newTestCycleRequest()) },
    onCyclesRequest: () => { dispatch($testCyclesRequest()) },
    onFilterChange: (filter) => { dispatch($setTestCyclesFilter(filter)) },
    onFilterReset: () => { dispatch($resetTestCyclesFilter()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCyclesPage)
