import React, { useEffect, useState } from 'react';
import './BookSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons';

const BookSearch = () => {
  const [sun, setSun] = useState(false); // State to track the sun/moon mode
  const [query, setQuery] = useState('linux operating system'); // State to store the search query
  const [books, setBooks] = useState([]); // State to store the retrieved books
  const [expandedBookId, setExpandedBookId] = useState(null); // State to track the expanded book description

  // Function to handle sun/moon mode toggle
  const handleSun = () => {
    const body = document.body;
    body.classList.toggle("changemode");
    const book = document.querySelectorAll(".book")
    book.forEach((books) =>  books.classList.toggle("changemode"))
    setSun(!sun);
  };
  

  // Function to handle book search
  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyCmSq1TVDrDfG6DrbZakTEyqyueSSvqJ1E';
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
      );
      const data = await response.json();

      if (data.items) {
        const limitedBooks = data.items.slice(0, 20); // Limit the books array to 20 results
        setBooks(limitedBooks);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error(error);
      setBooks([]);
    }
  };

  // Function to handle PDF download
  const handleDownloadPDF = (downloadLink) => {
    try {
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = 'book.pdf';
      link.click();
    } catch (error) {
      console.error('Error occurred while downloading the PDF:', error);
    }
  };

  // Function to expand book description
  const handleExpandDescription = (bookId) => {
    setExpandedBookId(bookId);
  };

  // Function to collapse book description
  const handleCollapseDescription = () => {
    setExpandedBookId(null);
  };

  useEffect(() => {
    handleSearch(); // Perform initial book search on component mount
  }, [query]);

  return (
    <div className="container">
      <div className="search-img">
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
          />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="mode">
          <button onClick={handleSun}>
            <FontAwesomeIcon icon={sun ? faSun : faMoon} />
          </button>
        </div>
      </div>

      {books.length > 0 && (
        <div className="books-container">
          {books.map((book) => (
            <div key={book.id} className="book">
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="book-cover"
                />
              )}
              <h3 className="book-title">{book.volumeInfo.title}</h3>
              <p className="book-author">
                <span>Author:</span> {book.volumeInfo.authors?.join(', ')}
              </p>
              <p className="book-categories">
                <span>Category:</span> {book.volumeInfo.categories?.join(', ')}
              </p>

              {expandedBookId === book.id ? (
                <div>
                  <p className="book-description">
                    <span>Description:</span> {book.volumeInfo.description}
                  </p>

                  <button onClick={handleCollapseDescription} className="back-button">
                    Read less
                  </button>
                </div>
              ) : (
                <div>
                  <p className="book-description">
                  <span>Purpose: </span>
 {book.volumeInfo.description ? (
                      book.volumeInfo.description.substring(0, 150)
                    ) : (
                      'No description available'
                    )}
                    ...
                  </p>
                  <button
                    onClick={() => handleExpandDescription(book.id)}
                    className="view-more-button"
                  >
                    Read more
                  </button>
                </div>
              )}

              <p className="book-published-date">
                <span>Published-Date:</span> {book.volumeInfo.publishedDate}
              </p>
              <p className="book-page-count">
                <span>PageCount:</span> {book.volumeInfo.pageCount}
              </p>

              {book.volumeInfo.infoLink && (
                <div className="button-group">
                  <button
                    onClick={() => handleDownloadPDF(book.volumeInfo.infoLink)}
                    className="read-live-button"
                  >
                    Read live
                  </button>
                  {book.accessInfo.pdf && book.accessInfo.pdf.isAvailable && (
                    <a
                      href={book.accessInfo.pdf.acsTokenLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-pdf-link"
                    >
                      <button className="download-button">
                        <FontAwesomeIcon icon={faDownload} /> Download
                      </button>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      
<footer>
   <p>&copy; 2023 Oladax. All rights reserved.</p>
</footer>

    </div>
  );
};

export default BookSearch;
