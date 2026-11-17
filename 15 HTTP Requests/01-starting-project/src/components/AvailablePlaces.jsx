import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       console.log("Getting Response");
  //       return response.json();
  //     })
  //     .then((resdata) => {
  //       console.log("Showing");
  //
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/places");
      const resdata = response.json();
      setAvailablePlaces(resdata.places);
    }
    fetchData();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
