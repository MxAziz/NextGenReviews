import React, { useState } from "react";

const AddReview = () => {

   const [selectedValue, setSelectedValue] = useState("");

 const handleAddReview = (e) => {
   e.preventDefault();

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

   console.log(formData);
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
            <h1 className=" text-4xl font-bold text-white mt-4 "> Add New Review</h1>
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
                      className="input input-bordered dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Game Title/ Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Game Name/Title"
                      className="input input-bordered dark:bg-gray-700"
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
                      className="input input-bordered dark:bg-gray-700"
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
                      placeholder="Rating(e.g., 1-5 or 1-10)"
                      className="input input-bordered dark:bg-gray-700"
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
                      className="input input-bordered dark:bg-gray-700"
                      required
                    />
                  </div>
                  {/* <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Genres{" "}
                      </span>
                    </label>
                    <select
                      id="countries"
                      value={selectedValue}
                      class="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a Genre</option>
                      <option value="option1">Action </option>
                      <option value="option2">RPG </option>
                      <option value="option3">Adventure</option>
                    </select>
                  </div> */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base text-white font-bold">
                        Genres{" "}
                      </span>
                    </label>
                    <select
                      id="countries"
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      placeholder=""
                      className="input input-bordered dark:bg-gray-700"
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
                      placeholder=""
                      className="input input-bordered dark:bg-gray-700"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-wide  dark:bg-gray-700 text-white hover:text-black "
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
