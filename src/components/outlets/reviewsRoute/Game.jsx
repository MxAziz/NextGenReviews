import { useNavigate } from "react-router-dom";

const Game = ({ game }) => {

    const navigate = useNavigate();

  const {_id, email, name, genre, publish, rating, description, title, cover } =
    game;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="w-full h-[250px]"
            src={cover ? cover : "https://i.ibb.co.com/Qj1sfWH/game-img.jpg"}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center ">
            <p className=" text-2xl font-bold">{title}</p>
            <p className=" font-bold  text-end">Rating: {rating}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className=" text-xl ">Published year: {publish}</p>
            <p className=" font-bold  text-end badge text-orange-400">
              {" "}
              {genre}
            </p>
          </div>
          <div className="card-actions justify-center mt-4">
            <button
              onClick={() => navigate(`/review/${game._id}`)}
              className="btn w-full
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-medium shadow-lg
              hover:from-purple-600 hover:to-pink-600
              transition-all duration-300"
            >
              Explore Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
