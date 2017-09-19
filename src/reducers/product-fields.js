const newWizardDisplayed = (state = false, action) => {
    switch (action.type) {
        case 'ENTER_NEW_FIELD_CREATION':
            return true
        case 'EXIT_NEW_FIELD_CREATION':
            return false
        default:
            return state
    }
}

export const productFieldsReducer = (state = {}, action) => {
    return {
        //list: list(state.list, action),
        newWizardDisplayed: newWizardDisplayed(state.newWizardDisplayed, action)
    }
}