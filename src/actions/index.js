const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const REMOVE_BOOK = (book) => ({
  type: 'DELETE_BOOK',
  payload: book,
});

export { CREATE_BOOK, REMOVE_BOOK };
