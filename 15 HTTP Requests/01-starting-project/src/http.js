export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resdata = await response.json();
  if (!response.ok) {
    throw new Error("Could not fetch places! Please try again later.");
  }
  return resdata.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resdata = await response.json();
  if (!response.ok) {
    throw new Error("Failed to update user data");
  }
  return resdata.message;
}
export async function fetchUserPlaces(){

  const response= await fetch("http://localhost:3000/user-places");
  if(!response.ok){
    throw new Error("Could fetch the user places! try again later.");
  }
  const resdata=await response.json();

  return resdata.places || [];;

}
