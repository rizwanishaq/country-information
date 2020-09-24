import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { CountryContext } from "../contexts/CountryContext";

const CountryPicker = () => {
  const { country, setCountry, countries } = useContext(CountryContext);

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Country-picker</Form.Label>
        <Form.Control
          as="select"
          custom
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          {" "}
          {countries &&
            countries.map((country) => (
              <option value={country.alpha2Code} key={country.name}>
                {country.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default CountryPicker;
