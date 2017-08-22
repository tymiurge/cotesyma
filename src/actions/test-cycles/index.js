import * as api from './../../api'

export const $setTestCyclesFilter = (filter) => (dispatch) => {
  dispatch({
    type: 'TEST_CYCLE_FILTER_CHANGED',
    filter
  })
}

export const $resetTestCyclesFilter = () => (dispatch) => {
  dispatch({
    type: 'TEST_CYCLE_FILTER_RESET'
  })
}

export const $newTestCycleRequest = () => (dispatch) => {
  dispatch({
    type: 'TEST_CYCLE_CREATION_REQUEST'
  })
}

export const $addCycle = cycle => (dispatch) => {
  dispatch({
    type: 'TEST_CYCLE_CREATION_COMPLETED'
  })
  api.saveTestCycle(cycle).then(response => {
    dispatch({
      type: 'TEST_CYCLE_ADDED',
      cycle: response
    })
  })
}

export const $testCyclesRequest = () => (dispatch) => {
  api.fetchTestCycles().then(cycles => {
    dispatch({
      type: 'TEST_CYCLES_FETCHED',
      cycles
    })
  })
}

export const $cancelCycleCreation = () => dispatch => {
  dispatch({
    type: 'TEST_CYCLE_CREATION_COMPLETED'
  })
}
