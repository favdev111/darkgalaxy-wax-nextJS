import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Words from '../../src/Words';
import withContent from '../../site/withContent';
import ProductsList from '../../components/products/ProductsList';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ margin: 20 }}>
        <header style={{ textAlign: "center" }}>
          <h1><Words animate>The Products</Words></h1>
        </header>
        <ProductsList />
        <NotificationContainer />
      </div>
    </Provider>
  )
};

export default withContent({ App });