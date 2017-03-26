import { addBookToFakeXHR } from '../lib/books.db';

export const loadBooks = books => {
  return {
    type: 'LOAD_BOOKS',
    books
  };
};

export const addBook = book => {

  return dispatch => {
    // for a loading status
    // dispatch(fetchingBooks())
    return addBookToFakeXHR(book)
      .then( books => {
        dispatch({
          type: 'ADD_BOOK',
          books
        });
      });
  }

};

export const updateSearchFilter = searchFilter => {
  return {
    type: 'UPDATE_SEARCH_FILTER',
    searchFilter
  };
};
