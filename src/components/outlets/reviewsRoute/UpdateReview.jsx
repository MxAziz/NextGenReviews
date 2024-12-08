
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [review, setReview] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  // Fetch the existing review data
  useEffect(() => {
    fetch(`https://chill-gamer-server-liart.vercel.app/games/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
        setSelectedValue(data.genre);
      });
  }, [id]);

  // Handle update submission
  const handleUpdateReview = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      cover: e.target.cover.value,
      title: e.target.title.value,
      description: e.target.description.value,
      rating: e.target.rating.value,
      publish: e.target.publish.value,
      genre: selectedValue,
      name: e.target.name.value,
      email: e.target.email.value,
    };

   fetch(`https://chill-gamer-server-liart.vercel.app/reviews/${id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(updatedData),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log("Response from server:", data);
       if (data.modifiedCount > 0) {
         toast.success("Review updated successfully!");
         navigate("/myReviews");
       } else {
         toast.warning("No changes were made.");
       }
     })
     .catch((error) => {
       console.error("Error occurred:", error);
       toast.error("Failed to update review.");
     });

  };

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://assets1.ignimgs.com/2017/05/10/prey-1280-02-1494460424051_160w.jpg?width=1280)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mt-4">
              Update Your Review
            </h1>
            {/* Form */}
            <div className="hero min-h-screen">
              <div className="card w-full shrink-0 shadow-2xl">
                <form
                  onSubmit={handleUpdateReview}
                  className="card-body grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Game Cover Image/Thumbnail
                      </span>
                    </label>
                    <input
                      type="text"
                      name="cover"
                      defaultValue={review.cover}
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Game Name/Title
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={review.title}
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={review.description}
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Rating
                      </span>
                    </label>
                    <input
                      type="number"
                      name="rating"
                      min="1"
                      max="10"
                      step="0.1"
                      defaultValue={review.rating}
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Publishing Year
                      </span>
                    </label>
                    <input
                      type="number"
                      name="publish"
                      defaultValue={review.publish}
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Genres
                      </span>
                    </label>
                    <select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className="border h-12 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Choose a Genre
                      </option>
                      <option value="action">Action</option>
                      <option value="rpg">RPG</option>
                      <option value="adventure">Adventure</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={user?.displayName || ""}
                      readOnly
                      className="input input-bordered bg-gray-700"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user?.email || ""}
                      readOnly
                      className="input input-bordered bg-gray-700"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-wide bg-gray-700 text-white hover:text-black"
                      type="submit"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
