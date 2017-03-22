import React from 'react';

const BookFilterInput = ({ setFilter }) => (
  <input type="text" placeholder="Search..." onChange={setFilter} />
);

export default BookFilterInput;
