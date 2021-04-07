import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function Search() {

  return(
    <Container fluid>
    <Row>
      <Col size="12">
        <Jumbotron>
          <h1>(React) Google Books Search </h1>
          <p> Search for and Save Books of Interest</p>
        </Jumbotron>
      </Col>
    </Row>
    </Container>
  )
}

export default Search;