import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row, Container } from "../components/Grid";
import SearchBar from "../components/SearchBar"
import BookCard from "../components/BookCard"
import API from "../utils/API.js"


const Search = () => {
  const [bookSearch, setBookSearch] = useState("dragon"); 
  const [books, setBooks] = useState([]);

  useEffect(() => {
      loadBooks()
  }, []);

  function loadBooks() {
      API.searchBooks(bookSearch)
          .then(res =>
              setBooks(res.data.items)
          )
          .catch(err => console.log(err));
  };

  function handleInputChange(event) {
      const { value } = event.target;
      setBookSearch(value);
  };

  function handleFormSubmit(event) {
      event.preventDefault();
      if (bookSearch) {
          loadBooks();
          console.log(books);
      };
  };

  function handleBookSubmit(book) {
      if (book.title) {
          API.saveBook(
              {
                  title: book.title,
                  subtitle: book.subtitle,
                  authors: book.authors,
                  description: book.description,
                  image: book.imageLinks.thumbnail,
                  link: book.infoLink
              }
          )
              .then(res => console.log(res))
              .catch(err => console.log(err));
      }
  };

  return (
      <>
        <Header />
        <SearchBar handleInputChange={handleInputChange} 
          handleFormSubmit={handleFormSubmit} 
          bookSearch={bookSearch}
         >
        </SearchBar>
          <section className="pt-5">
              <Container>
                  <h2>Search results</h2>
                  <Row>

                      {books
                          ? books.map((book) => (
                              <BookCard 
                                  key={book.id} 
                                  data={book.volumeInfo} 
                                  page="search"
                                  handleBookSubmit={handleBookSubmit}
                                  />
                          ))
                          : null}
                  </Row>
              </Container>
          </section>
      </>
  );
}

export default Search;