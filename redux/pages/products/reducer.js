const initialState = {
    isProductsLoading: false
};

const productsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PENDING_GET_PRODUCTS': {
            return {
                isProductsLoading: false
            }
        }
        default: {
            return state;
        }
    }
};

export default productsPageReducer;