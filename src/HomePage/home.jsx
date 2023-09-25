import AddressBar from "../components/1addressBar";
import NavBar from "../components/2navBar";
import HeroSection from "../components/3heroSection";
import AboutUs from "../components/4aboutUs";
import SlideSelection from "../components/5SlideSelection";
import Whatyouwillget from "../components/6whatyouwillget"
import Footer from "../components/footer";
import Youtube from "../components/8youtube";
import Contactus from "../components/contactus";
import WorkingWith from "../components/7workingWith";


import Counts from "../components/counts";
import Testimonals from "../components/testimonals";

const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <SlideSelection />
      <Whatyouwillget/>
      <WorkingWith />
      <Youtube/>
      <Counts />
      <Testimonals/>
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
