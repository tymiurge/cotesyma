import * as api from './../../api'

export const $fetchProductTests = productId => dispatch =>
    api.fetchProductTests(productId).then(tests => {
        dispatch({
            type: 'PRODUCT_TESTS_FETCHED',
            productId,
            tests
        })
    })