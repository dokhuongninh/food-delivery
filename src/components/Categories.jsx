import { categories } from "../data";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category) => (
          <Category data={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
