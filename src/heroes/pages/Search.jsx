import React from "react";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <div className="container mt-2">
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5 mb-4">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a superhero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
            <button
              className="btn btn-outline-primary mt-2 ms-2"
              onClick={onResetForm}
            >
              Reset
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__pulse animate__faster"
            style={{ display: showSearch ? "" : "none" }}
          >
            {" "}
            Search a superhero{" "}
          </div>
          <div
            className="alert alert-danger animate__animated animate__headShake animate__faster"
            style={{ display: showError ? "" : "none" }}
          >
            No superhero matched with <b> {q} </b>{" "}
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};