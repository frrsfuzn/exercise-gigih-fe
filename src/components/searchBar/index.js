import React from "react";
import { TextField, Button } from "@material-ui/core";
export default function SearchBar({ handleSubmit }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="searchbar" style={{ marginRight: "20px" }}>
          Search for Gifs
        </label> */}
        <TextField
					data-testid="searchBar"
          id="searchbar"
          label="Search Gifs"
          defaultValue="Mario"
          variant="outlined"
        />
        <Button data-testid="buttonTestSearch" type="submit" variant="contained" color="primary">
          Search
        </Button>
        {/* <input id="searchbar" /> */}
        {/* <input type="submit" value="Search" /> */}
      </form>
    </>
  );
}
