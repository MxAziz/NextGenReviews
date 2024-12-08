import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const GameWatchList = () => {

    const { user } = useContext(AuthContext);
    const [watchList, setWatchList] = useState([]);

      useEffect(() => {
        if (user?.email) {
          fetch(`https://chill-gamer-server-liart.vercel.app/watchList/${user.email}`)
            .then((res) => res.json())
            .then((data) => setWatchList(data))
            .catch((error) =>
              console.error("Error fetching watchList:", error)
            );
        }
      }, [user]);




    return (
      <div>
        this is game watch list. {watchList.length}
        <div className="">
          <div className="overflow-x-auto my-8 md:w-11/12 mx-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Game Title</th>
                  <th>Rating</th>
                  <th>Added Date</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {watchList.map((item, index) => (
                  <tr key={item.reviewId} className="hover">
                    <th>{index + 1}</th> <td>{item.title}</td>
                    <td>{item.rating}</td>
                    <td>{new Date(item.addedAt).toLocaleString()}</td>{" "}
                    <td>{item.userEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default GameWatchList;