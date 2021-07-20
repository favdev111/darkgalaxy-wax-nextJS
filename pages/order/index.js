import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import withContent from '../../site/withContent';
import OrderForm from '../../components/order/orderForm';

const App = () => {

    return (
        <Provider store={store}>
            <OrderForm />
        </Provider>
    )
};

export default withContent({ App });