import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Cardmovied({ mov }) {
  return (
    <Col xs="6" md="4" lg="3" className="my-1">
    <Link to={`/movie/${mov.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
          alt=""
          className="card__image"
        />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p> اسم الفيلم : {mov.original_title}</p>
            <p> التاريخ : {mov.release_date}</p>
            <p>النوع : {mov.popularity} </p>
            <p>التقييم {mov.vote_average}</p>
          </div>
        </div>
      </div>
      </Link>
    </Col>
  );
}
