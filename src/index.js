import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import App from './components/App';
import rootReducer from './reducers/index';

const BOOKS = [
  {
    id: uuidv4(),
    title: 'Book Test 1',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'Book Test 2',
    category: 'Horror',
  },
  {
    id: uuidv4(),
    title: 'Book Test 3',
    category: 'Sci-Fi',
  },
];

const initialState = {
  books: BOOKS,
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
