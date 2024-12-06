import React from "react";

const ExtraSection = () => {
  return (
    <div>
      {/* extra section 01 */}
      <section className="bg-[#101622] ">
        <h1 className=" text-4xl font-bold text-white w-2/3 mx-auto text-center py-14">
          Trusted by 25,000+ world-class brands and organizations of all sizes
        </h1>
        <div className=" grid grid-cols-4 gap-6 pb-24 w-4/5 mx-auto text-white font-bold text-4xl">
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
        <div className="flex justify-between w-4/5 mx-auto">
          <h1 className="text-3xl font-bold">Newsletter Signup</h1>
          <div className=" space-x-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered dark:bg-gray-700"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered dark:bg-gray-700"
            />
            <input className="btn" type="submit" value="SUBSCRIBE" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection;
