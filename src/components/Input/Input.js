import { Form, Button } from "react-bootstrap";

import "./style.css";

export default function Search({ onChange, list, onClick, value }) {
  return (
    <div className="wrapper">
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={onChange}
        list={list}
        value={value}
      ></Form.Control>
      <Button variant="outline-success" onClick={onClick} id="search-button">
        Search
      </Button>
    </div>
  );
}
