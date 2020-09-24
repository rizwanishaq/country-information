import React, { useContext } from "react";
import { useQuery } from "react-query";
import { nanoid } from "nanoid";
import { CountryContext } from "../contexts/CountryContext";
import { Card, Row, Col, ListGroup, Container } from "react-bootstrap";

const fetchCountry = async (country) => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${country}`
  );
  const data = await response.json();
  return data;
};

const CountryDetails = () => {
  const { country } = useContext(CountryContext);
  const { data, isLoading, error } = useQuery([country], fetchCountry);

  if (isLoading) return <span>Loading ...</span>;
  if (error) return <span>oop!! error occurred</span>;

  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={data.flag} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Row variant="success">
            <Col>
              <Row>Capital: {data.capital}</Row>
              <Row>
                <span>Population: {data.population}</span>
              </Row>
            </Col>
            <Col sm={2}>
              languages:{" "}
              <ListGroup variant="flush">
                {data.languages.map((lang) => (
                  <ListGroup.Item key={nanoid()} variant="primary">
                    {lang.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              currencies:{" "}
              <ListGroup variant="flush">
                {data.currencies.map((curr) => (
                  <ListGroup.Item key={nanoid()} variant="success">
                    {curr.name} {curr.symbol}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CountryDetails;
