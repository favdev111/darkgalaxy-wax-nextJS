import Commerce from '@chec/commerce.js';
// const commerce = new Commerce('pk_test_2961373003a78896d8537538484528c419c5a481edd85');
const commerce = new Commerce('pk_296130580df9d56a07bdca0a258a20972b98ac58fe3b7');

export const getProducts = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_GET_PRODUCTS' });
        return commerce.products.list()
            .then(res => {
                dispatch({ type: 'SUCCESS_GET_PRODUCTS' });
                return res
            });
    };
};