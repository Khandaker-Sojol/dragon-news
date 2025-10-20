import { FaStar, FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(author.published_date)
    .toISOString()
    .split("T")[0];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden  mx-auto ">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 mb-4 bg-[#F3F3F3]">
        <div className="flex items-center gap-3 px-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-[#403F3F] font-semibold">{author.name}</h3>
            <p className="text-[#706F6F] text-sm">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <CiBookmark
            size={30}
            className="text-gray-400 cursor-pointer hover:text-gray-600"
          />
          <BsShare
            size={20}
            className="text-gray-400 cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>
      <div className="px-4">
        {/* Title */}
        <h2 className="px-4 text-xl font-bold text-[#403F3F] leading-snug">
          {title}
        </h2>

        {/* Image */}
        <div className="px-4 mt-3">
          <img
            src={thumbnail_url}
            alt="thumbnail"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="px-4 py-3  text-[#706F6F]">
          <p className="leading-relaxed line-clamp-3">
            {details.slice(0, 250)}...
          </p>
          <Link
            to={`/news-details/${id}`}
            className="text-orange-500 font-semibold cursor-pointer hover:underline"
          >
            Read More ...
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#E7E7E7] px-4  text-gray-500 py-6">
          <div className="flex items-center text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={20}
                className={
                  i < rating.number ? "text-orange-400" : "text-gray-300"
                }
              />
            ))}
            <span className="text-[#706F6F] ml-2 font-semibold ">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEye size={20} />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
