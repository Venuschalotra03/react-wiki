import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// Component to show detailed information about a single character
const CardDetails = () => {
  // Get the dynamic ID from the URL
  let { id } = useParams();
  // State to store the character's full data
  let [fetchedData, updateFetchedData] = useState([]);

  // Destructure important fields for easy use
  let { name, location, origin, gender, image, status, species } = fetchedData;
  // API URL for the specific character by ID
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  // Fetch character details
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-fluid" src={image} alt="" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className=" badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;