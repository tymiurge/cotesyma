const creatingNewCycle = (state = false, action) => {
    switch (action.type) {
      case 'TEST_CYCLE_CREATION_REQUEST':
        return true
      case 'TEST_CYCLE_CREATION_COMPLETED':
        return false
      default:
        return state
    }
  }
  
  const cycles = (state = [], action) => {
    switch (action.type) {
      case 'TEST_CYCLES_FETCHED':
        return action.cycles
      case 'TEST_CYCLE_ADDED':
        return [...state, action.cycle]
      default:
        return state
    }
  }
  
  const filter = (state = '', action) => {
    switch (action.type) {
      case 'TEST_CYCLE_FILTER_CHANGED':
        return action.filter
      case 'TEST_CYCLE_FILTER_RESET':
        return ''
      default:
        return state
    }
  }
  
  export const testCyclesReducer = (state = {}, action) => {
    return {
      creatingNewCycle: creatingNewCycle(state.creatingNewCycle, action),
      cycles: cycles(state.cycles, action),
      filter: filter(state.filter, action)
    }
  }
  