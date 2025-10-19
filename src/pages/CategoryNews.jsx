import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import Loading from "../components/Loading";

const CategoryNews = () => {
  const { id } = useParams();
  console.log(id);

  const newsData = useLoaderData();
  console.log(newsData);

  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!newsData) {
      setLoading(false);
      return;
    }

    if (id == "0") {
      setCategoryNews(newsData);
      setLoading(false);
      return;
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      setLoading(false);
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
      setLoading(false);
    }
  }, [newsData, id]);

  if (loading) return <Loading />;

  return (
    <div className="">
      <h1 className="text-[#403F3F] font-semibold text-xl">
        Dragon News found - {categoryNews.length}{" "}
      </h1>
      <div className="my-4 space-y-6">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
