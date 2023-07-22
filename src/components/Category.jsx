const Category = (data) => {
  const { name, image } = data.data;

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
      <h2 className="font-bold sm:text-xl">{name}</h2>
      <img src={image} alt={name} className="w-20 max-[428px]:w-10" />
    </div>
  );
};

export default Category;
