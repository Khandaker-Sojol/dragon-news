import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

import CategoryNews from "../pages/CategoryNews";
import RightAside from "../components/RightAside";
import LeftAside from "../components/LeftAside";

const HomeLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid md:grid-cols-12 gap-10">
        <aside className="md:col-span-3 sticky h-fit top-0">
          <LeftAside></LeftAside>
        </aside>
        <article className="md:col-span-6">
          <Outlet></Outlet>
        </article>
        <aside className="md:col-span-3 sticky h-fit top-0">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
