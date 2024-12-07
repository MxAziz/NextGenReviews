import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReviewDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Error fetching game details:", err));
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-3xl font-bold">{game.title}</h1>
    //   <img
    //     src={game.cover || "https://via.placeholder.com/150"}
    //     alt={game.title}
    //     className="w-full h-64 object-cover rounded mt-4"
    //   />
    //   <p className="text-gray-700 mt-4">{game.description}</p>
    //   <p className="text-gray-500 mt-2">Rating: {game.rating}</p>
    //   <p className="text-gray-500">Published Year: {game.publish}</p>
    // </div>
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row  w-4/5 mx-auto">
        <img
          src={game.cover || "https://via.placeholder.com/150"}
          className="max-w-md min-h-72 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{game.title}</h1>
          <div className=" text-2xl  text-gray-700">
            <p className="">{game.description}</p>
            <p className="">Rating: {game.rating}</p>
            <p className="">Genre: {game.genre}</p>
            <p className="">Published Year: {game.publish}</p>
            <p className="">Name: {game.name}</p>
            <p className="">Email: {game.email}</p>
          </div>
          <button className="btn btn-neutral mt-4">Add to WatchList</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
