import { Link } from "react-router-dom";

const HeadlineCard = (data) => {
  const { url, title, subText, buttonText, imageSrc } = data.data;

  return (
    <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{subText}</p>
        <Link to={url}>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:border-black hover:text-white hover:text-xl hover:font-bold duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
      <img
        src={imageSrc}
        alt=""
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default HeadlineCard;
