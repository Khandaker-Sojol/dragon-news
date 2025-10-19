import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import faceBook from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import swim from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playground from "../assets/playground.png";
import bgImg from "../assets/bg.png";

const RightAside = () => {
  return (
    <div>
      <section>
        <h1 className="text-[#403F3F] font-bold text-xl">Login With</h1>

        <div className="flex flex-col gap-4 my-4">
          <button className="btn btn-outline btn-info py-6">
            <FaGoogle size={24} />
            Login with Google
          </button>

          <button className="btn btn-outline py-6">
            <FaGithub size={24} />
            Login with GitHub
          </button>
        </div>
      </section>
      <section>
        <h1 className="text-[#403F3F] font-semibold text-xl">Find Us On</h1>

        <div className="join join-vertical my-3 w-full">
          <button className="btn join-item py-8 bg-white text-[#706F6F] gap-4 ">
            <img
              className="bg-[#F3F3F3] px-4 py-3 rounded-full"
              src={faceBook}
              alt=""
            />
            Facebook
          </button>
          <button className="btn join-item py-8 bg-white text-[#706F6F] gap-4">
            <img
              className="bg-[#F3F3F3] p-4 rounded-full"
              src={twitter}
              alt=""
            />
            Twitter
          </button>
          <button className="btn join-item py-8 bg-white text-[#706F6F] gap-4 ">
            <img
              className="bg-[#F3F3F3] p-4 rounded-full"
              src={instagram}
              alt=""
            />
            Instagram
          </button>
        </div>
      </section>
      <section className="bg-[#F3F3F3] rounded my-4 pb-10">
        <h1 className="text-[#403F3F] font-bold text-xl ml-6 pt-6">Q-Zone</h1>
        <figure className="flex flex-col justify-center items-center space-y-2">
          <img src={swim} alt="" />
          <img src={classroom} alt="" />
          <img src={playground} alt="" />
        </figure>
      </section>
      <section className="my-6">
        <img className="w-full rounded" src={bgImg} alt="" />
      </section>
    </div>
  );
};

export default RightAside;
