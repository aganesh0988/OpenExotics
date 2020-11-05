import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppWithContext from './components/AppWithContext';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithContext />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
