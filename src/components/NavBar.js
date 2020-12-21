import React from "react";
import AddMovie from "./AddMovie";
import Rating from "./Rating";
import { Form, Button, FormControl } from "react-bootstrap";
import { useState } from "react";

const NavBar = ({ handleChange, Updatemovie }) => {
  const [rate, setRate] = useState(0)
  const [search, setSearch] = useState('')

  const getRatingInput = (rating) => {
    setRate(rating)
    handleChange(search,rating)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    handleChange(e.target.value,rate)
  }
  

  return (
    <div className="nav">
      <Form inline>
        <h1>Movie Cards</h1>
      </Form>

      <Form inline>
        <div className="search">
          <FormControl
            type="text"
            placeholder="Search ..."
            className="mr-sm-2"
            onChange={handleSearch}
          />
          <Rating getRatingInput={getRatingInput} />
        </div>
      </Form>

      <Form inline>
        <AddMovie />
      </Form>
    </div>
  );
};

export default NavBar;
