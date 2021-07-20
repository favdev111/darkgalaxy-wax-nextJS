export const cloudWalletLogin = wallet => async dispatch => {
    try {
        // const userAccount = await wallet.login();
        localStorage.setItem('auth', wallet.accountName);
        dispatch({ type: 'SET_ADDRESS', walletAddress: wallet.accountName });
        dispatch({ type: 'SET_KEYS', pubKeys: wallet.session.channel.key });
    } catch (error) {
        console.log(error);
    }
};

export const cloudWalletLogout = () => async dispatch => {
    try {
        dispatch({ type: 'SET_ADDRESS', walletAddress: null });
        dispatch({ type: 'SET_KEYS', pubKeys: null });
        localStorage.removeItem('auth');
    } catch (error) {
        console.log(error);
    }
};
