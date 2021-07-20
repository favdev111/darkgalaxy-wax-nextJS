import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Words from '../../src/Words';
import withContent from '../../site/withContent';
import CheckoutForm from '../../components/checkout/checkoutForm'
import { NotificationContainer } from 'react-notifications';


const App = () => {

    return (
        <Provider store={store}>
            <div style={{ margin: 20 }}>
                <header style={{ textAlign: "center" }}>
                    <h1><Words animate>Checkout</Words></h1>
                </header>
                <CheckoutForm />
                <NotificationContainer />
            </div>
        </Provider>
    )
};

export default withContent({ App });