import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  return (
    <div className="">
      <h1 className="text-[#403F3F] font-semibold text-xl">Dragon News Home</h1>
    </div>
  );
};

export default CategoryNews;
