import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  console.log(categoryPromise);
  const categories = use(categoryPromise);
  console.log(categories);

  return (
    <div>
      <h2 className="text-[#403F3F] font-semibold text-xl">All Categories</h2>
      <div className="flex flex-col items-center justify-center my-2">
        {categories.map((category) => (
          <NavLink
            className={
              "text-[#9F9F9F] text-xl font-medium hover:bg-base-200 px-6 py-3 my-1 w-full lg:pl-12"
            }
            key={category.id}
            to={`category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
