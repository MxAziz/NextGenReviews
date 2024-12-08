// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import Game from './Game';

// const AllReviews = () => {

//     const games = useLoaderData();
//     console.log(games);

//     return (
//       <div>
//         <div className=" grid gap-6 my-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {games.map((game) => (
//               <Game key={game._id} game={game}></Game>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default AllReviews;


import React, { useState, useEffect } from "react";
import Game from "./Game";

const AllReviews = () => {
  const [games, setGames] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");

  // const games = useLoaderData();

  // Fetch data from server
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://chill-gamer-server-liart.vercel.app/games?sortBy=${sortBy}&genre=${genre}`
      );
      const data = await response.json();
      setGames(data);
      setGenre(data);
      sortBy(data);
    } catch (error) {
      console.error("Error fetching games:", error.message);
    }
  };

  // Fetch data when sortBy or genre changes
  useEffect(() => {
    fetchData();
    // fetch(`https://chill-gamer-server-liart.vercel.app/games?sortBy=${sortBy}&genre=${genre}`, {
    //   method: "GET",
    //   headers: {
    //     "content-type": "application.json",
    //   },
    //   body: JSON.stringify(),
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    //   setGames(data);
    // })
  }, [sortBy, genre]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">All Reviews</h1>

      {/* Sorting and Filtering */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* Sort By Dropdown */}
        <div>
          <label className="font-bold mr-2">Sort by:</label>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered"
          >
            <option value="">Select</option>
            <option value="rating">Rating (Descending)</option>
            <option value="year">Year (Descending)</option>
          </select>
        </div>

        {/* Filter By Genre */}
        <div>
          <label className="font-bold mr-2">Genre:</label>
          <select
            onChange={(e) => setGenre(e.target.value)}
            className="select select-bordered"
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
          </select>
        </div>
      </div>

      {/* Games Display */}
      <div className="grid gap-6 my-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <Game key={game._id} game={game}></Game>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
