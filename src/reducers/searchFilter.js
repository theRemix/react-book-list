const searchFilter = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_FILTER':
      return action.searchFilter;

    default:
      return state;
  }
};

export default searchFilter;

