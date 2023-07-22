/* eslint-disable react/prop-types */
import { Footer, NavBar } from "../components";
import { lazy, Suspense } from "react";

const FoodList = lazy(() => import("../components/FoodList"));

const FoodListPage = (props) => {
  return (
    <>
      <NavBar />
      <Suspense fallback="loading">
        <FoodList {...props} />
      </Suspense>
      <Footer />
    </>
  );
};

export default FoodListPage;
