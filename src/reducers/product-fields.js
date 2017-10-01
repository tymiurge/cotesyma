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

const list = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_FIELDS_FETCHED':
            return [...action.fields]
        case 'ADD_FIELD_TO_PRODUCT_CONFIG': 
            return [...state, action.fieldData]
        default: 
            return state
    }
}

export const productFieldsReducer = (state = {}, action) => {
    return {
        list: list(state.list, action),
        newWizardDisplayed: newWizardDisplayed(state.newWizardDisplayed, action)
    }
}