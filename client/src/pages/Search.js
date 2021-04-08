import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Col, Row, Container } from "../components/Grid";
import SearchBar from "../components/SearchBar"
import API from "../utils/API.js"


function Search() {

  const [bookState, setBookState] = useState({
    bookSearch: "",
    books:[]
  });

  const handleInputChange = event => {

    const { value } = event.target;
    setBookState ({ ...bookState, bookSearch: value });
    
  };
  
  
  
  const handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(bookState.bookSearch)
        .then(res => {
          console.log(res.data)
          setBookState({ bookSearch: "", books: res.data})
          console.log(bookState)})
        .catch(err => console.log(err));
  
  }

  return(
    <Container fluid>
    <Row>
      <Col size="12">
        <Header />
      </Col>
    </Row>
    <SearchBar booksState={bookState} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </Container>
  )
}

export default Search;