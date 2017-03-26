import { combineReducers } from 'redux';
import books from './books';
import searchFilter from './searchFilter';

const bookListApp = combineReducers({
  books,
  searchFilter,
});

export default bookListApp;
