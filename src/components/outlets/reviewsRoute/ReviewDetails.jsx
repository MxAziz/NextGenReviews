import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const ReviewDetails = () => {
    const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch(`https://chill-gamer-server-liart.vercel.app/games/${id}`)
      .then((res) => res.json())
      .then((data) => setGame(data))
      .catch((err) => console.error("Error fetching game details:", err));
  }, [id]);

    if (!game) return <p>Loading...</p>;



    const handleAddToWatchList = () => {

        const watchListData = {
        reviewId: game._id,
        title: game.title,
        rating: game.rating,
        userEmail: user.email,
        username: user.displayName,
      };

      fetch("https://chill-gamer-server-liart.vercel.app/watchList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watchListData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Added to watchList successfully!");
          } else {
            toast.error(data.message || "Failed to add to watchList");
          }
        })
        .catch((error) => {
          console.error("Error adding to watchList:", error);
            toast.error("An error occurred", error);
        });
    };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row  w-4/5 mx-auto">
        <img
          src={game.cover || "https://via.placeholder.com/150"}
          className="max-w-md min-h-72 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{game.title}</h1>
          <div className=" text-2xl  text-gray-700 mt-2">
            <p className="">{game.description}</p>
            <p className="">Rating: {game.rating}</p>
            <p className="">Genre: {game.genre}</p>
            <p className="">Published Year: {game.publish}</p>
            <p className=" font-semibold">Name: {game.name}</p>
            <p className=" font-semibold">Email: {game.email}</p>
          </div>
          <button
            onClick={handleAddToWatchList}
            className="btn mt-4
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white font-medium shadow-lg
            hover:from-purple-600 hover:to-pink-600
            transition-all duration-300"
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
