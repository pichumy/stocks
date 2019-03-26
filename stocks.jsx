import React from 'react';
import ReactDOM from 'react-dom';
import Root from './src/components/root';
import configureStore from './src/store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});
