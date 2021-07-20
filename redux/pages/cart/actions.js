import Commerce from '@chec/commerce.js';
// const commerce = new Commerce('pk_test_2961373003a78896d8537538484528c419c5a481edd85');
const commerce = new Commerce('pk_296130580df9d56a07bdca0a258a20972b98ac58fe3b7');

export const actionAddCart = (productId, quantity) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_ADD_CART' });
        return commerce.cart.add(productId, quantity)
            .then(res => {
                dispatch({ 
                    type: 'SUCCESS_ADD_CART',
                    payload: res.cart.total_items 
                });
                return res
            });
    };
};

export const actionGetCart = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_GET_CART'});
        return commerce.cart.contents()
            .then((res) => {
                let totalItem = 0
                res.forEach((product) => (
                    totalItem += product.quantity
                ))
                dispatch({ 
                    type: 'SUCCESS_GET_CART',
                    payload: totalItem
                })
                return res
            }).catch((err) => {
                debugger
            })
    }
}

export const actionRemoveCart = (id) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_REMOVE_CART'});
        return commerce.cart.remove(id)
                .then((res) => {
                    dispatch({
                        type: 'SUCCESS_REMOVE_CART',
                        payload: res.cart.total_items
                    })
                    return res
                });
    }
}
export const actionUpdateCartItem = (id, num) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_UPDATE_CART_ITEM'});
        return commerce.cart.update(id, {quantity: num})
                .then((res) => {
                    dispatch({
                        type: 'SUCCESS_ADD_CART',
                        payload: res.cart.total_items
                    })
                    return res
                });
    }
}

export const actionRetrieveCart = () => {
    return (dispatch, getState) => {
        return commerce.cart.retrieve()
                .then((res) => {
                    dispatch({
                        type: 'SUCCESS_RETRIEVE_CART',
                        payload: res.id
                    })
                    return res
                });
    }
}