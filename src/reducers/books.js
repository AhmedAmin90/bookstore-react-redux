const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        category: action.payload.category,
      }];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
