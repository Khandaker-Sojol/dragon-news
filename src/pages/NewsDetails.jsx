import React from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import { GoArrowLeft } from "react-icons/go";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);

  const clickedNews = data.find((news) => news.id == id);
  console.log(clickedNews);
  const { title, thumbnail_url, details, category_id } = clickedNews;

  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <Header></Header>
      </header>
      <h1 className="text-[#403F3F] text-xl font-semibold">Dragon News</h1>
      <main className="grid md:grid-cols-12 gap-12 my-5">
        <article className="md:col-span-9 ">
          <div className="space-y-6 border border-gray-200 rounded-lg p-8 pb-16">
            <img className="rounded-lg w-full" src={thumbnail_url} alt="" />
            <h1 className="text-[#403F3F] font-bold text-2xl">{title}</h1>
            <p className="text-[#706F6F]">{details}</p>

            <Link
              to={`/category/${category_id}`}
              className="flex items-center gap-2 bg-[#d72050] text-white font-semibold text-xl px-8 py-3 cursor-pointer w-2/5"
            >
              {" "}
              <GoArrowLeft className="text-2xl font-bold" />
              All news in this category
            </Link>
          </div>
        </article>
        <aside className="md:col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
