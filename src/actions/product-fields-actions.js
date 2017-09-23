import * as api from './../api'

export const $enterNewFieldCreation = () => dispatch =>
    dispatch({
        type: 'ENTER_NEW_FIELD_CREATION'
    })

export const $exitNewFieldCreation = () => dispatch =>
    dispatch({
        type: 'EXIT_NEW_FIELD_CREATION'
    })

export const $fetchProductFields = productId => dispatch => {
    api.fetchProductFields(productId).then(fields => {
        dispatch({
            type: 'PRODUCT_FIELDS_FETCHED',
            fields
        })
    })
}
