import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Contactus from "../components/contactus";
import Counts from "../components/counts";
import Testimonals from "../components/testimonals";

const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      <HeroSection />
      <Counts />
      <Testimonals/>
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
