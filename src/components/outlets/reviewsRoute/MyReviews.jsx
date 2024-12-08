import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";


const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myReviews/${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((err) => console.error("Error fetching reviews:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review deleted successfully!");
          setReviews(reviews.filter((review) => review._id !== id));
        }
      })
      .catch((err) => {
        console.error("Error deleting review:", err);
        toast.error("Failed to delete review!");
      });
  };

  return (
    <div className="overflow-x-auto w-4/5 mx-auto mb-16 mt-6">
      <h2 className="text-4xl mb-4 font-bold my-4 text-center">My Reviews</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={review._id}>
              <th>{index + 1}</th>
              <td>{review.title}</td>
              <td>{review.rating}</td>
              <td>
                <Link
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Click to Edit Review!"
                  to={`/updateReview/${review._id}`}
                  className="btn btn-sm btn-primary mr-2"
                >
                  Update
                </Link>
                <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Click to Remove Review!"
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
                {/* React Tooltip */}
                <ReactTooltip id="my-tooltip" place="top" effect="solid" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
