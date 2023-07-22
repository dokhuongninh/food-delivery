import { categories } from "../constants";

/* eslint-disable react/prop-types */
const FilterCategoryList = ({
  handleChangeFilterCondition,
  filterCondition,
}) => {
  const normalFilterButton =
    "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white";
  const selectedFilterButton = "m-1 border-orange-600 bg-orange-600 text-white";

  return (
    <div>
      <p className="font-bold text-gray-700">Filter Type</p>
      <div className="flex justify-start flex-wrap">
        <button
          className={
            filterCondition.category === "All"
              ? selectedFilterButton
              : normalFilterButton
          }
          onClick={() =>
            handleChangeFilterCondition({
              category: "All",
              price: "",
            })
          }
        >
          All
        </button>
        {categories?.map((category) => (
          <button
            key={category.id}
            className={
              filterCondition.category === category.id
                ? selectedFilterButton
                : normalFilterButton
            }
            onClick={() =>
              handleChangeFilterCondition({
                ...filterCondition,
                category: category.id,
              })
            }
          >
            {category.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCategoryList;
