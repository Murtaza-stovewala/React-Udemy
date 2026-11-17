export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resdata = await response.json();
  if (!response.ok) {
    throw new Error("Could not fetch places! Please try again later.");
  }
  return resdata.places;
}
