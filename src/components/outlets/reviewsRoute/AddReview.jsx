import React, { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const AddReview = () => {

  const [selectedValue, setSelectedValue] = useState("");
  const { user } = useContext(AuthContext);




 const handleAddReview = (e) => {
   e.preventDefault();

   const form = e.target;
   const formData = {
     cover: e.target.cover.value,
     title: e.target.title.value,
     description: e.target.description.value,
     rating: e.target.rating.value,
     publish: e.target.publish.value,
     genre: selectedValue,
     name: e.target.name.value,
     email: e.target.email.value,
   };

   fetch("https://chill-gamer-server-liart.vercel.app/games", {
     method: "POST",
     headers: {
       'content-type': 'application/json',
     },
     body: JSON.stringify(formData),
   })
   .then(res => res.json())
     .then(data => {
    //  console.log('post response', data);
       if (data.insertedId) {
         toast.success('Games added successfully')
         form.reset();
      }
   })

 };


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
            <h1 className=" text-4xl font-bold text-white mt-4 ">
              {" "}
              Add New Review
            </h1>
            {/* form */}
            <div className="hero min-h-screen">
              <div className="card  w-full  shrink-0 shadow-2xl">
                <form
                  onSubmit={handleAddReview}
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
                      placeholder="Cover image URL"
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
                      placeholder="Game Name/Title"
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
                      placeholder="Game Description"
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Rating{" "}
                      </span>
                    </label>
                    <input
                      type="number"
                      name="rating"
                      min="1"
                      max="10"
                      step="0.1"
                      placeholder="Rating(e.g., 1-5 or 1-10)"
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Publishing year
                      </span>
                    </label>
                    <input
                      type="number"
                      name="publish"
                      placeholder="Publishing year(Ex: 2021, 2024)"
                      className="input input-bordered bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Genres{" "}
                      </span>
                    </label>
                    <select
                      id="games"
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className=" border h-12 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Choose a Genre
                      </option>
                      <option value="action">Action </option>
                      <option value="rpg">RPG </option>
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
                      className="btn btn-wide  bg-gray-700 text-white hover:text-black "
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
