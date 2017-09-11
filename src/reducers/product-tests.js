const list = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_TESTS_FETCHED':
            return action.tests
        default:
            return state
    }
}

const newTestWizardDisplayed = (state = false, action) => {
    switch (action.type) {
        case 'ENTER_NEW_TEST_CREATION':
            return true
        case 'EXIT_NEW_TEST_CREATION':
            return false
        default:
            return state
    }
}

export const productTestsReducer = (state = {}, action) => {
    return {
        list: list(state.list, action),
        newTestWizardDisplayed: newTestWizardDisplayed(state.newTestWizardDisplayed, action)
    }
}