import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-[#F3F3F3] p-4 flex gap-6">
      <button className="bg-[#D72050] px-6 py-3 text-white font-medium">
        Latest
      </button>
      <Marquee className="font-semibold text-lg" pauseOnHover={true} speed={60}>
        <p className="text-[#403F3F] pr-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reiciendis quis facere iusto dicta molestias qui veritatis fuga
          voluptatibus, totam soluta praesentium labore aliquid et tempore quae
          laborum odit molestiae!.....
        </p>
        <p className="text-[#403F3F] pr-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reiciendis quis facere iusto dicta molestias qui veritatis fuga
          voluptatibus, totam soluta praesentium labore aliquid et tempore quae
          laborum odit molestiae!.....
        </p>
        <p className="text-[#403F3F] pr-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          reiciendis quis facere iusto dicta molestias qui veritatis fuga
          voluptatibus, totam soluta praesentium labore aliquid et tempore quae
          laborum odit molestiae!.....
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
