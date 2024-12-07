import { key } from 'localforage';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Game from './Game';

const AllReviews = () => {

    const games = useLoaderData();
    console.log(games);

    return (
      <div>
        <div className=" grid gap-6 my-10 w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
              <Game key={game._id} game={game}></Game>
          ))}
        </div>
      </div>
    );
};

export default AllReviews;