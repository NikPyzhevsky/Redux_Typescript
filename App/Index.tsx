

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/index'

import MainStack from "./navigation/RootNavigation"


const App = () => {


  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};


export default App;
