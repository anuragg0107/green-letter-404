import BestSellerData from "./BestSellerData";
import NewArrivalData from "./NewArrivalData";
import SpotLight from "./SpotLight";
import TopCatogeires from "./TopCatogeries";
import Ingrdient from "./Ingrdient";
import Love from "./Love";
import Spin from "./Spin";
import Reviews from "./Reviews";
import NavbarBottomSlider from "./NavbarBottomSlider";
const LandingPage = () => {
  return (
    <>
      <NavbarBottomSlider />
      <Spin />
      <NewArrivalData />
      <BestSellerData />
      <SpotLight />
      <TopCatogeires />
      <Ingrdient />
      <Love />
      <Reviews />
    </>
  );
};
export default LandingPage;
