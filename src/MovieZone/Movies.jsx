import React, { useState } from "react";
import { movies } from "./data.js";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);


  const filterByCategory = (movietype) =>{
    setMovieList(movies.filter((data)=>data.category ==movietype))
  }

  return (
    <>
      <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
        <div className="mx-auto text-center">
         
          <button
            onClick={() => filterByCategory("Action")}
            type="button"
            className="btn btn-outline-primary mx-3"
          >
            Odi World Cup
          </button>

          <button
            onClick={() => filterByCategory("champ")}
            type="button"
            className="btn btn-outline-light mx-3"
          >
          ICC Champions Trophy
          </button>

          <button
            onClick={() => filterByCategory("tt")}
            type="button"
            className="btn btn-outline-info mx-3"
          >
            T20 World Cup
          </button>

          <button
            onClick={() => filterByCategory("ipl")}
            type="button"
            className="btn btn-outline-warning mx-3"
          >
            IPL
          </button>
        </div>
      </div>



      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          // gap: "2rem",
          textAlign: "center",
          width: "1300px",
          // backgroundColor:'yellow',
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((data) => (
    <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
          
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
          <a href={data.backdrop_path}  className="link-text">Click here to Know the details</a>
          <br/>
            <h5  className="winner-text">Winner: {data.title}</h5>
            <p  className="date-text">Winning Date: {data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export  default Movies