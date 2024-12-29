import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {/* First Slide */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://assets1.ignimgs.com/2017/05/10/prey-1280-02-1494460424051_160w.jpg?width=1280"
            className="w-full h-[550px] "
          />
          <div className="absolute top-1/3 left-10 text-white">
            <h1 className=" text-2xl md:text-5xl font-bold">
              <Typewriter
                words={[
                  "Welcome to NextGenReviews!",
                  "Explore Exciting Reviews!",
                  "Enjoy the Latest Games!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="mt-4 text-xl">
              Discover the best games and reviews in one place.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Second Slide */}
        <div id="slide2" className="carousel-item relative w-full h-screen">
          <img
            src="https://gamingbolt.com/wp-content/uploads/2023/03/System-Shock-Remake_06.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Third Slide */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/11/ravenswatch_ps5-key-art.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Fourth Slide */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/06/not-sure-about-system-shock-remake-play-prey-instead.jpg"
            className="w-full h-[550px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
