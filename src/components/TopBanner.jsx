import { topBanner1, topBanner2, topBanner3 } from "../assets/images";
import { useState, useEffect } from "react";

const listSlider = [
  {
    id: 1,
    firstTitle1: "The",
    firstTitle2: "Best",
    subTitle1: "Food",
    subTitle2: "Delivered",
    imgSrc: topBanner1,
  },
  {
    id: 2,
    firstTitle1: "Always",
    firstTitle2: "Fresh",
    subTitle1: "Always",
    subTitle2: "Hot",
    imgSrc: topBanner2,
  },
  {
    id: 3,
    firstTitle1: "To",
    firstTitle2: "Share",
    subTitle1: "With Your Family",
    subTitle2: "Right Here",
    imgSrc: topBanner3,
  },
];

const TopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev === listSlider.length - 1 ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(slideInterval);
  });

  return (
    <div className="max-w-[1640px] mx-auto p-4 mt-[60px]">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {`${listSlider[currentSlide].firstTitle1} `}
            <span className="text-orange-500">
              {listSlider[currentSlide].firstTitle2}
            </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">{`${listSlider[currentSlide].subTitle1} `}</span>
            {listSlider[currentSlide].subTitle2}
          </h1>
        </div>
        <img
          src={listSlider[currentSlide].imgSrc}
          alt="top banner image"
          className="w-full max-h-[250px] md:max-h-[500px] object-cover duration-300"
        />
      </div>
    </div>
  );
};

export default TopBanner;
