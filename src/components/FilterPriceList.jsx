/* eslint-disable react/prop-types */
import { prices } from "../constants";

// eslint-disable-next-line react/prop-types
const FilterPriceList = ({
  handleChangeFilterCondition,
  filterCondition,
  isTopPage,
}) => {
  const normalFilterButton =
    "m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white";
  const selectedFilterButton = "m-1 border-orange-600 bg-orange-600 text-white";

  return (
    <div>
      <p className="font-bold text-gray-700">Filter Price</p>
      <div className="flex justify-start max-w-[390px] w-full">
        {!isTopPage ? (
          <button
            className={
              // eslint-disable-next-line react/prop-types
              filterCondition.price === "All"
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
        ) : (
          ""
        )}
        {prices?.map((price) => (
          <button
            key={price.id}
            className={
              // eslint-disable-next-line react/prop-types
              filterCondition.price === price.id
                ? selectedFilterButton
                : normalFilterButton
            }
            onClick={() =>
              handleChangeFilterCondition({
                ...filterCondition,
                price: price.id,
              })
            }
          >
            {price.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPriceList;
