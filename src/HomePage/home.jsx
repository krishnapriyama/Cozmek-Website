import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Contactus from "../components/contactus";

import AboutUs from "../components/aboutUs";
import SlideSelection from "../components/SlideSelection";

import Counts from "../components/counts";
import Testimonals from "../components/testimonals";


const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      <HeroSection />

      <AboutUs/>

      <SlideSelection/>
     
     
     

      <Counts />
      <Testimonals/>
      <Contactus />
      <Footer />

    </div>
  );
};

export default Home;
