import React from "react";

export default function Search(props) {
  //   const {session} = props;

  return (
    <form class="d-flex">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}
