import React, { useContext,  } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // console.log("sign out successful");
        navigate("/");
        toast.info("Sign out successful");
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };


  // navbar links
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allReviews"}>All Reviews</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/addReview"}>Add Review</NavLink>
          </li>
          <li>
            <NavLink to={"/myReviews"}>My Reviews</NavLink>
          </li>
          <li>
            <NavLink to={"/gameWatchList"}>Game WatchList</NavLink>
          </li>
        </>
      )}
    </>
  );

    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost md:text-xl font-bold">
              {" "}
              <img
                className=" aspect-auto object-contain  size-10 hidden md:block rounded-full"
                src="/logo.jpg"
                alt=""
              />{" "}
              NextGenReviews
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* authentication condition */}
          <div className="navbar-end ">
            {user ? (
              <>
                <div className="flex justify-center items-center gap-2">
                  {/*  */}
                  <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="">
                      <div className="avatar online">
                        <div className="size-12 rounded-full">
                          <img
                            src={
                              user && user.photoURL
                                ? user.photoURL
                                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                            alt="User Avatar"
                          />
                        </div>
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-[#19202f] text-white font-bold rounded-box z-[1] w-52 p-2 py-4 shadow"
                    >
                      <h3>{user.displayName}</h3>
                    </ul>
                  </div>
                  {/*  */}
                  <div className="">
                    <a onClick={handleLogOut} className="btn font-bold ">
                      Log Out
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" space-x-4">
                  <button>
                    <NavLink to={"/login"}>Login</NavLink>
                  </button>
                  <NavLink to={"/resister"}>
                    <button className="btn btn-neutral font-bold">
                      Resister
                    </button>
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;