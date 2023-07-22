/* eslint-disable react/prop-types */
import FoodCard from "./FoodCard";
import FilterPriceList from "./FilterPriceList";
import FilterCategoryList from "./FilterCategoryList";

import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import axios from "axios";

import { data as topPageData } from "../data";

const FoodList = ({ pageType }) => {
  const [foods, setFoods] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pageType) {
      case "isBurgerPage": {
        axios
          .get("/src/data/jsonData/dataHamburger.json")
          .then((res) => setFoods(res.data))
          .catch((err) => console.log(err));
        break;
      }
      case "isPizzaPage": {
        axios
          .get("/src/data/jsonData/dataPizza.json")
          .then((res) => setFoods(res.data))
          .catch((err) => console.log(err));
        break;
      }
      case "isChickenPage": {
        axios
          .get("/src/data/jsonData/dataChicken.json")
          .then((res) => setFoods(res.data))
          .catch((err) => console.log(err));
        break;
      }
      case "isTopPage": {
        setFoods(topPageData);
        break;
      }
      default:
        setFoods([]);
    }
  }, [pathname, pageType]);

  const [filterCondition, setFilterConditions] = useState({
    category: "All",
    price: "",
  });

  const foodsFiltered = useMemo(() => {
    if (filterCondition.category === "All") {
      if (!filterCondition.price) {
        return foods;
      } else {
        return foods.filter((food) => {
          return food.price === filterCondition.price;
        });
      }
    } else {
      if (!filterCondition.price) {
        return foods.filter((food) => {
          return food.category === filterCondition.category;
        });
      } else {
        return foods.filter((food) => {
          return (
            food.category === filterCondition.category &&
            food.price === filterCondition.price
          );
        });
      }
    }
  }, [foods, filterCondition.category, filterCondition.price]);

  const handleChangeFilterCondition = ({ category, price }) => {
    setFilterConditions((prev) => {
      return {
        ...prev,
        category,
        price,
      };
    });
  };

  return (
    <div
      className={`max-w-[1640px] m-auto px-4 ${
        pageType === "isTopPage" ? "py-12" : "py-28"
      }`}
    >
      <h1 className="text-orange-600 text-center text-4xl font-bold">
        Top Rated Menu Items
      </h1>

      <div
        className={`flex flex-col lg:flex-row ${
          pageType === "isTopPage" ? "justify-between" : "justify-start"
        }`}
      >
        {pageType === "isTopPage" ? (
          <FilterCategoryList
            handleChangeFilterCondition={handleChangeFilterCondition}
            filterCondition={filterCondition}
          />
        ) : (
          ""
        )}

        <FilterPriceList
          handleChangeFilterCondition={handleChangeFilterCondition}
          filterCondition={filterCondition}
          isTopPage={pageType === "isTopPage"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {foodsFiltered?.map((item) => (
          <FoodCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
