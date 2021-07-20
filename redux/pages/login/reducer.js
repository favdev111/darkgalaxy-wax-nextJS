const initialState = {
    walletAddress: null,
    pubKeys: null
};

// [
//     "EOS5AKTzg4szqhynmSaXaPw7weYEoVPEh84qB2RV4n1eqnHTbW5Dn",
//     "EOS7DaLBULzPXKmV6V7aJrawgn2rwmK82o33k3KiAc8GBCWuM6qBd"
// ]

const loginPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ADDRESS': {
            return {
                ...state,
                walletAddress: action.walletAddress
            }
        }
        case 'SET_KEYS': {
            return {
                ...state,
                pubKeys: action.pubKeys
            }
        }
        default: {
            return state;
        }
    }
};

export default loginPageReducer;