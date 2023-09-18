import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Contactus from "../components/contactus";

const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      {/* <HeroSection /> */}
      <Contactus/>
      <Footer/>
    </div>
  );
};

export default Home;
