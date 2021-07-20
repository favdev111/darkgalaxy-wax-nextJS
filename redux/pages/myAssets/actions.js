import axios from "axios";

export const getNftAssets = () => {
    const owner = localStorage.getItem('auth');
    if(owner){
        return (dispatch, getState) => {
            dispatch({ type: 'PENDING_GET_NFT_ASSETS' });
            return axios
                .get(`https://wax.api.atomicassets.io/atomicmarket/v1/assets?owner=${owner}&collection_name=darkgalaxies&page=1&limit=100&order=desc&sort=asset_id`)
                .then(res => {
                    // dispatch({ type: 'SUCCESS_GET_NFT_ASSETS' });
                    return res.data.data
                });
        };
    } else {
        return false
    }
    
};