import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

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
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resdata = await response.json();
      setAvailablePlaces(resdata.places);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading Places...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
