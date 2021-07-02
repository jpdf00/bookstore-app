import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const BOOKS = [
  {
    id: Math.floor(Math.random() * 10000),
    title: 'Book Test 1',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: 'Book Test 2',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: 'Book Test 3',
    category: 'Sci-Fi',
  },
];

const store = createStore(rootReducer, { books: BOOKS });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
