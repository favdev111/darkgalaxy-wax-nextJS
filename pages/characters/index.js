import React from 'react';
import withContent from '../../site/withContent';
import Gallery from '../../components/characters/Gallery';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Lightbox from '../../components/characters/Lightbox';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: 30, margin: 0 }}>Characters</h1>
        <Gallery />
        <Lightbox />
      </div>
    </Provider>
  );            
};

export default withContent({ App });
