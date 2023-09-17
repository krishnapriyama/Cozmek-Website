import HeroSection from "../components/HeroSection";
import AddressBar from "../components/addressBar";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="box-border">
      <AddressBar />
      <NavBar />
      {/* <HeroSection /> */}
      <Footer/>
    </div>
  );
};

export default Home;
