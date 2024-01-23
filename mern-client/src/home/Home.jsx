import Banner from "../components/Banner";
import BestSellBooks from "./BestSellBooks";
import FavBook from "./FavBook";
import OtherBooks from "./OtherBooks";
import PromoBanner from "./PromoBanner";
import Review from "./Review";

const Home = () => {
  return (
    <>
      <Banner />
      <BestSellBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </>
  );
};

export default Home;
