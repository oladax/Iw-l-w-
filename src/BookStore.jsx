import React, { useState } from 'react';

const BookStore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      console.log('Search results:', data); // Add this line to log the response data
      setSearchResults(data.docs);
    } catch (error) {
      console.error('Error occurred while fetching search results:', error);
    }
  };
  

  const handleDownload = async (pdfUrl) => {
    try {
      const response = await fetch(`/api/proxy-pdf?url=${encodeURIComponent(pdfUrl)}`);
      const blob = await response.blob();

      // Create a temporary URL for the blob object
      const blobUrl = URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.target = '_blank';
      link.download = 'book.pdf';

      // Simulate a click on the link to trigger the download
      link.click();

      // Clean up the temporary objects
      URL.revokeObjectURL(blobUrl);
      link.remove();
    } catch (error) {
      console.error('Error occurred while downloading the PDF:', error);
    }
  };

  return (
    <div>
      {/* Input field for the search query */}
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {/* Search button */}
      <button onClick={handleSearch}>Search</button>

      {/* Displaying search results */}
      {searchResults.map((book) => (
        <div key={book.key}>
          {/* Book title */}
          <h2>{book.title}</h2>
          {/* Author */}
          <p>Author: {book.author_name?.join(', ')}</p>
          {/* Published Date */}
          <p>Published Date: {book.first_publish_year}</p>
          {book.has_fulltext && (
            <>
              {/* Button for downloading PDF */}
              <button onClick={() => handleDownload(`https://openlibrary.org${book.key}/page/${book.first_publish_year}.pdf`)}>
                Download PDF
              </button>
              {/* Button for reading online */}
              <button>
                <a href={`https://openlibrary.org${book.key}`} target="_blank" rel="noopener noreferrer">
                  Read Online
                </a>
              </button>
              {/* Render the image of the PDF */}
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="PDF Cover" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookStore;
