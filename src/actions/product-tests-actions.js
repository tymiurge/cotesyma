import * as api from './../api'

export const $fetchProductTests = productId => dispatch =>
    api.fetchProductTests(productId).then(tests => {
        dispatch({
            type: 'PRODUCT_TESTS_FETCHED',
            productId,
            tests
        })
    })

export const $enterNewTestCreation = () => dispatch =>
    dispatch({
        type: 'ENTER_NEW_TEST_CREATION'
    })

export const $exitNewTestCreation = () => dispatch =>
    dispatch({
        type: 'EXIT_NEW_TEST_CREATION'
    })

export const $addTest = testData => dispatch =>
    dispatch({
        type: 'EXIT_NEW_TEST_CREATION'
    })