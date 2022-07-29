import React from "react";

const RightSection = () => {
  const trending = ["Javascript", "React", "TypeScript"];
  return (
    <section className="py-4 px-2 flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search Twitter"
        className="bg-gray-200 w-full px-4 py-2 text-lg rounded-full"
      />
      <section className="bg-[#F7F9F9] px-4 py-4 rounded-3xl">
        <h1 className="font-bold text-lg px-4">What's happening?</h1>
        <div className="flex flex-col gap-2">
          {trending.map((item) => {
            return (
              <div className=" px-4 py-2 hover:bg-gray-200 rounded-3xl">
                <h1 className="font-sm text-gray-400">Trending</h1>
                <h2 className="font-bold text-lg "># {item}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default RightSection;
