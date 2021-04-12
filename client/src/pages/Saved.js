import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "../components/Grid";

import API from "../utils/API";
import BookCard from "../components/BookCard";

const Saved = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => console.log(err));
    };

    const handleBookDelete = id => {
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

    return (
        <Container>
            <h2>Saved Books</h2>
            <Row>
                <Col size="12">
                    {books
                        ? books.map((book) => (
                            <BookCard
                                key={book._id}
                                data={book}
                                page="saved"
                                handleBookDelete={handleBookDelete}
                            />
                        ))
                        : null}
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;