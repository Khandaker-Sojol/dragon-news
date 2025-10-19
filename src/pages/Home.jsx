import React from "react";
import Categories from "../components/Categories";
import CategoryNews from "./CategoryNews";
import { Navigate } from "react-router";

const Home = () => {
  return <Navigate to={"category/0"}></Navigate>;
};

export default Home;
