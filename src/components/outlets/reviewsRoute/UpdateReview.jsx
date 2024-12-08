import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/games/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.error("Error fetching review:", err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedReview = {
      title: e.target.title.value,
      description: e.target.description.value,
      rating: e.target.rating.value,
      genre: e.target.genre.value,
    };

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated successfully!");
          navigate("/myReviews");
        }
      })
      .catch((err) => {
        console.error("Error updating review:", err);
        toast.error("Failed to update review!");
      });
  };

  if (!review) return <p>Loading...</p>;

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-2xl font-bold my-4">Update Review</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={review.title}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label>Description</label>
          <textarea
            name="description"
            defaultValue={review.description}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label>Rating</label>
          <input
            type="number"
            name="rating"
            defaultValue={review.rating}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            defaultValue={review.genre}
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateReview;
