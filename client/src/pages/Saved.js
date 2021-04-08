import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Col, Row, Container } from "../components/Grid";


function Saved() {

  return(
    <Container fluid>
    <Row>
      <Col size="12">
        <Header />
      </Col>
    </Row>
    </Container>
  )
}

export default Saved;