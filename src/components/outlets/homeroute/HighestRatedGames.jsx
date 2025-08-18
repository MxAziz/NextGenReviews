import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HighestRatedGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://chill-gamer-server-liart.vercel.app/highestRatedGames", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error fetching games:", err));
  }, []);

  console.log(games);

  //   return (
  //     <div>
  //       <h2 className="text-5xl font-bold mb-4 text-center mt-20">Highest Rated Games</h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mb-20 mt-8">
  //         {games.map((game) => (
  //           <div
  //             key={game._id}
  //             className="card bg-gray-100 shadow-lg p-4 rounded-lg "
  //           >
  //             <img
  //               src={game.cover || "https://via.placeholder.com/150"}
  //               alt={game.title}
  //               className="w-full h-48 object-cover rounded"
  //             />
  //             <h3 className="text-xl font-semibold mt-2">{game.title}</h3>
  //             <p className="text-gray-700">Rating: {game.rating}</p>
  //             <p className="text-gray-500 text-sm">{game.publish} Published</p>
  //             <button
  //               onClick={() => navigate(`/review/${game._id}`)}
  //               className="mt-4 px-4 py-2 bg-[#23272F] text-white rounded hover:bg-blue-600"
  //             >
  //               Explore Details
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <h2 className="text-5xl font-bold mb-12 text-center mt-20">
        Highest Rated Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-20 mt-8">
        {games.map((game) => (
          <div
            key={game._id}
            className="relative group rounded-2xl overflow-hidden shadow-xl
                     bg-white/10 backdrop-blur-lg border border-white/20
                     hover:scale-105 hover:shadow-2xl hover:border-blue-400/50
                     transition-all duration-300"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <img
              src={game.cover || "https://via.placeholder.com/150"}
              alt={game.title}
              className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            />

            <div className="relative p-5">
              <h3 className="text-2xl font-semibold text-black drop-shadow-md">
                {game.title}
              </h3>
              <p className="text-gray-700 mt-1">⭐ {game.rating}</p>
              <p className="text-gray-700 text-sm">{game.publish} Published</p>

              <button
                onClick={() => navigate(`/review/${game._id}`)}
                className="mt-4 px-5 py-2 w-full rounded-xl
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-medium shadow-lg
                         hover:from-purple-600 hover:to-pink-600
                         transition-all duration-300"
              >
                Explore Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HighestRatedGames;
