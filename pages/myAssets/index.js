import React from 'react';
import withContent from '../../site/withContent';
import { Provider } from 'react-redux';
import store from '../../redux/store';

import NftCardList from '../../components/myAssets/nftCardList'

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 30, marginBottom: 20 }}>My Assets</h1>
        <NftCardList />
      </div>
    </Provider>
  );            
};

export default withContent({App});
