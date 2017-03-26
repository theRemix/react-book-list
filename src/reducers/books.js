const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return [ ...action.books ];

    // case 'ADD_BOOK':
    //   return [
    //     ...state,
    //     action.book
    //   ];

    default:
      return state;
  }
};

export default books;
