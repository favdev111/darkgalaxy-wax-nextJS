const initialState = {
    isAssetsLoading: false,
    cartNum: null,
    cartId: null,
};

const cartPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_ADD_CART': {
            localStorage.setItem('cartNum', action.payload);
            return {
                cartNum: action.payload
            }
        }
        case 'SUCCESS_REMOVE_CART': {
            localStorage.setItem('cartNum', action.payload);
            return Object.assign({}, state, {
                cartNum: action.payload
            });
        }
        case 'SUCCESS_GET_CART': {
            localStorage.setItem('cartNum', action.payload);
            return Object.assign({}, state, {
                cartNum: action.payload
            });
        }
        case 'SUCCESS_RETRIEVE_CART': {
            return Object.assign({}, state, {
                cartId: action.payload
            });
        }
        case 'SUCCESS_CHECKOUT_PROCESS': {
            return Object.assign({}, state, {
                cartId: null,
                cartNum: null
            })
        }
        default: {
            return state;
        }
    }
};

export default cartPageReducer;