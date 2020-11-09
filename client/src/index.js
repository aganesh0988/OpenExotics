import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import AppWithContext from './components/AppWithContext';
import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <AppWithContext /> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
