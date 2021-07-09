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
    title: 'The Hobbit',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'The Silmarillion',
    category: 'Horror',
  },
  {
    id: uuidv4(),
    title: 'Roverandom',
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
