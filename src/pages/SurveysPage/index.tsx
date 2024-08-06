import React from "react";

export default function () {
  return (
    <div>
      <section className="pt-20 relative p-page pb-8">
        <figure className="bg-gradient-to-br from-secondary to-primary absolute-cover -z-1" />

        <div className="flex items-center">
          <div className="text-back flex flex-col gap-y-1 tracking-wider">
            <h1 className="font-semibold text-5xl">Contribute valuable data</h1>
            <h2 className="font-medium text-4xl">
              Get paid to fill out surveys
            </h2>
            <p className="font-medium text-2xl">
              And help brands be on the forefront of AI
            </p>
          </div>

          <div className="flex-1 flex justify-center gap-x-4 items-center">
            <button className="bg-black text-white px-5 py-1">
              Learn More
            </button>
            <button className="bg-white text-black font-medium px-5 py-1">
              Create Survey
            </button>
          </div>

          <img src="/images/paperwork.png" alt="paperwork" className="w-1/4" />
        </div>
      </section>

      <section className="p-page py-5">
        <div className="flex"></div>
      </section>
    </div>
  );
}

const dummy = [
  {
    name: "",
    description: "",
    costPerEntry: "",
    minutes: "",
  },
];
