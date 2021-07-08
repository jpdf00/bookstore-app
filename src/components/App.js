import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../assets/stylesheets/App.css';

const App = () => (
  <div className="appPanel">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
