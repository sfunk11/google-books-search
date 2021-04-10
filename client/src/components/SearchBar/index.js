import React from "react";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form"




function SearchBar(props) {

  return(
<form>
<Container>
  <Row>
    <p className = "bold">Search for Books</p>
   </Row>
   <Row> 
    <Col size="10">
      <Input
        name="BookSearch"
        onChange={props.handleInputChange}
        placeholder="Enter a book to begin!"
      />
    </Col>
    <Col size="2">
      <FormBtn
        onClick={props.handleFormSubmit}
        value={props.bookSearch}
        type="success"
        className="input-lg"
      >
          Search
      </FormBtn>
    </Col>
  </Row>
</Container>
</form>
  )
}

export default SearchBar;