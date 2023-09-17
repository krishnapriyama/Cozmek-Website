import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";

const Home = () => {
  return (
    <div className="box-border">
      <AddressBar />
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default Home;
