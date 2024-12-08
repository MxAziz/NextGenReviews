import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HighestRatedGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      fetch("https://chill-gamer-server-liart.vercel.app/highestRatedGames", {
          method: 'GET',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4 text-center mt-10">Highest Rated Games</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mb-20 mt-8">
        {games.map((game) => (
          <div
            key={game._id}
            className="card bg-gray-100 shadow-lg p-4 rounded-lg "
          >
            <img
              src={game.cover || "https://via.placeholder.com/150"}
              alt={game.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{game.title}</h3>
            <p className="text-gray-700">Rating: {game.rating}</p>
            <p className="text-gray-500 text-sm">{game.publish} Published</p>
            <button
              onClick={() => navigate(`/review/${game._id}`)}
              className="mt-4 px-4 py-2 bg-[#23272F] text-white rounded hover:bg-blue-600"
            >
              Explore Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGames;
