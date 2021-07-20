const initialState = {
    responsiveMode: '',
    navOpened: false
};

const responsivePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESPONSIVE_MODE': {
            return {
                ...state,
                responsiveMode: action.responsiveMode
            }
        }
        case 'TOGGLE_NAV': {
            return {
                ...state,
                navOpened: !state.navOpened
            }
        }
        case 'HIDE_NAV': {
            return {
                ...state,
                navOpened: false
            }
        }
        default: {
            return state;
        }
    }
};

export default responsivePageReducer;