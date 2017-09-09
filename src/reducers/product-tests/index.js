const list = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_TESTS_FETCHED':
            return action.tests
        default:
            return state
    }
}

export const productTestsReducer = (state = {}, action) => {
    return {
        list: list(state.list, action),
    }
}