import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-light shadow-lg">
      <div className="container">
        <a className="navbar-brand">Blogs List</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
