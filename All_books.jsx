import React, { useEffect, useState } from 'react';

function All_Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="all_books">
      {books.map(book => (
        <div key={book.id} className="book">
          <img src={book.coverImageUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Price: ${book.price}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}

export default All_Books;
