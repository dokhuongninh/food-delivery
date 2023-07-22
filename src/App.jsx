import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import FoodList from "./components/FoodList";
// import FoodCard from "./components/FoodCard";
import ScrollToTop from "./components/ScrollToTop";

import FoodListPage from "./pages/FoodListPage";

import { Routes, Route } from "react-router-dom";

import { data } from "./data";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/foods">
            <Route index element={<FoodList data={data} />}></Route>
            <Route
              path="burger"
              element={<FoodListPage pageType={"isBurgerPage"} />}
            ></Route>
            <Route
              path="pizza"
              element={<FoodListPage pageType={"isPizzaPage"} />}
            ></Route>
            <Route
              path="chicken"
              element={<FoodListPage pageType={"isChickenPage"} />}
            ></Route>
            {/* <Route path=":id" element={<FoodCard />}></Route> */}
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ScrollToTop />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
