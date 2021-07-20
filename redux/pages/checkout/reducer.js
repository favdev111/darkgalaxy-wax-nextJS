const initialState = {
    checkoutId: null,
    order: null,
};

const checkoutPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS_GET_TOKEN': {
            localStorage.setItem('checkoutId', action.payload)
            return Object.assign({}, state, {
                checkoutId: action.payload
            });
        }
        case 'SUCCESS_CHECKOUT_PROCESS': {
            localStorage.removeItem('cartNum');
            localStorage.removeItem('checkoutId');
            localStorage.setItem('order', JSON.stringify(action.payload))
            return Object.assign({}, state, {
                checkoutId: null,
                order: action.payload
            })
        }
        case 'SUCCESS_PAYPAL_AUTH': {
            localStorage.removeItem('cartNum');
        }
        case 'SUCCESS_PAYPAL_CAPTURE': {
            localStorage.removeItem('cartNum');
            localStorage.setItem('order', JSON.stringify(action.payload))
            return Object.assign({}, state, {
                checkoutId: null,
                order: action.payload
            })
        }
        default: {
            return state;
        }
    }
};

export default checkoutPageReducer;