import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Words from '../../src/Words';
import withContent from '../../site/withContent';
import Team from '../../components/team/Team';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ margin: 20 }}>
        <header style={{ textAlign: "center" }}>
          <h1><Words animate>The Team</Words></h1>
        </header>
        <Team />
      </div>
    </Provider>
  )
};

export default withContent({ App });