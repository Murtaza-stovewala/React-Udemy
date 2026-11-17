import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { use } from "react";
import { sortPlacesByDistance } from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

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
      try {
        const response = await fetch("http://localhost:3000/places");
        const resdata = await response.json();
        if (!response.ok) {
          throw new Error("Could not fetch places! Please try again later.");
        }
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resdata.places,
            position.coords.latitude,
            position.coords.longitude,
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch places!",
        });
        setIsFetching(false);
      }
      // setIsFetching(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <ErrorPage title={"An error occurred!"} message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Place Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
