export const setResponsiveMode = screenWidth => dispatch => {
    let respMode = '';
    if (screenWidth < 768 && screenWidth >= 601) {
        respMode = 'large';
    } else if (screenWidth < 601 && screenWidth >= 400) {
        respMode = 'medium';
    } else if (screenWidth < 400) {
        respMode = 'small';
    } else {
        respMode = '';
    }
    dispatch({ type: 'SET_RESPONSIVE_MODE', responsiveMode: respMode });
};

export const toggleNav = () => ({ type: 'TOGGLE_NAV' });

export const hideNav = () => ({ type: 'HIDE_NAV' });