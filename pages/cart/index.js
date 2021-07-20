import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Words from '../../src/Words';
import withContent from '../../site/withContent';
import CartList from '../../components/cart/cartList';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ margin: 20 }}>
        <header style={{ textAlign: "center" }}>
          <h1><Words animate>Carts</Words></h1>
        </header>
        <CartList />
      </div>
    </Provider>
  )
};

export default withContent({ App });