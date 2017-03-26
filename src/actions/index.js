// l t bookIdx = 3;

export const loadBooks = books => {
  return {
    type: 'LOAD_BOOKS',
    books
  };
};

// export const addBook = book => {
//   return {
//     type: 'ADD_BOOK',
//     id : ++bookIdx,
//     book
//   };
// };

export const updateSearchFilter = searchFilter => {
  return {
    type: 'UPDATE_SEARCH_FILTER',
    searchFilter
  };
};
