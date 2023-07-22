import {
  NavBar,
  TopBanner,
  HeadlineCards,
  FoodList,
  Categories,
  Footer,
} from "../components";

import { data } from "../data";

const Home = () => {
  return (
    <>
      <NavBar />
      <TopBanner />
      <HeadlineCards />
      <FoodList data={data} pageType={"isTopPage"} />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
