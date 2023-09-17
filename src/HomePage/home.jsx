import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <AddressBar />
      <NavBar />
      {/* <HeroSection /> */}
      <Footer/>
    </div>
  );
};

export default Home;
