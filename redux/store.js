import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import artPageReducer from './pages/characters/reducer';
import loginPageReducer from './pages/login/reducer';
import responsivePageReducer from './pages/resp/reducer';
import teamPageReducer from './pages/team/reducer';
import myAssetsPageReducer from './pages/myAssets/reducer';
import productsPageReducer from './pages/products/reducer';
import cartPageReducer from './pages/cart/reducer';
import checkoutPageReducer from './pages/checkout/reducer';

const rootReducer = combineReducers({
    teamPage: teamPageReducer,
    artPage: artPageReducer,
    responsivePage: responsivePageReducer,
    loginPage: loginPageReducer,
    myAssetsPage: myAssetsPageReducer,
    productsPage: productsPageReducer,
    cartPage: cartPageReducer,
    checkoutPage: checkoutPageReducer,
});

// const store = createStore(rootReducer, 
//     applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));
export default store;