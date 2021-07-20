const initialState = {
    isAssetsLoading: false
};

const myAssetsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PENDING_GET_NFT_ASSETS': {
            return {
                isAssetsLoading: false
            }
        }
        default: {
            return state;
        }
    }
};

export default myAssetsPageReducer;