import React from "react";

const ExtraSection = () => {
  return (
    <div>
      {/* extra section 01 */}
      <section className="bg-[#101622] ">
        <h1 className=" text-3xl md:text-4xl font-bold text-white w-11/12 lg:w-2/3 mx-auto text-center py-20">
          Trusted by 25,000+ world-class brands and organizations of all sizes
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-24 w-11/12 lg:w-4/5 mx-auto text-white font-bold text-xl md:text-3xl ">
          <h3>PAWPAW </h3>
          <h3>MoxChannel </h3>
          <h3>Mentheer </h3>
          <h3>Markeetar </h3>
          <h3>hydropokit </h3>
          <h3>GAMMO</h3>
          <h3>fleanca</h3>
          <h3>GRENIO</h3>
        </div>
      </section>

      {/* extra section 02 */}
      <section className="bg-[#19202f] py-16  text-white">
        <div className="md:flex justify-between w-11/12 lg:w-4/5 mx-auto">
          <h1 className="text-3xl font-bold">Newsletter Signup</h1>
          <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-0 lg:grid-cols-3 space-y-3 md:space-y-0 md:space-x-2 lg:space-x-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered bg-gray-700"
              required
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered bg-gray-700"
              required
            />
            <input className="btn font-bold md:mt-4 lg:mt-0" type="submit" value="SUBSCRIBE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
