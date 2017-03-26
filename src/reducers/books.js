const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return [ ...action.books ];

    case 'ADD_BOOK':
      return [ ...action.books ];

    default:
      return state;
  }
};

export default books;
