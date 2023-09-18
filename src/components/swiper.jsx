import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Slide from "../components/slide";

let card = [
  {
    mainImage: "/src/assets/BasicCardimg.png",
    roundImages: [
      "/src/assets/Placementassistance.png",
      "/src/assets/recorded.png",
      "/src/assets/placement.png",
      "/src/assets/community.png",
    ],
    Project: "2",
    type: "Basic",
    MainHead: "AI Crash Course Program (6 Months)",
    Discription:
      "Embark on your AI journey with our 6-month Crash Program. Dive into the world of Artificial Intelligence through expertly curated content, assignments, practical sessions, and rigorous exams. Achieve industry-recognized certifications, guided by a personal mentor. Engage in two real-world AI projects, access our vibrant AI community, and rest assured with our 100% Placement Assistance.",
    DiscountAmount: "15",
    OriginalAmount: "25",
  },
  {
    mainImage: "/src/assets/InterMediateCardimg.png",
    roundImages: [
      "/src/assets/Live.png",
      "/src/assets/Placementassistance.png",
      "/src/assets/jobasistance.png",
      "/src/assets/recorded.png",
      "/src/assets/community.png",
    ],
    Project: "4",
    type: "Intermediate",
    MainHead: "AI Expert Course Program (1 Year)",
    Discription:
      "Elevate your AI skills in our 1-year Expert Program. With a mix of recorded and live classes, hands-on assignments, and CRBS certifications, you'll tackle four impactful AI projects. Engage with our thriving AI community, participate in Hackathons, and receive specialized interview training for a successful career, all backed by our 100% Placement Assistance.",
    DiscountAmount: "30",
    OriginalAmount: "45",
  },
  {
    mainImage: "/src/assets/AdvanceCardImg.jpeg",
    roundImages: [
      "/src/assets/jobGuarantee.png",
      "/src/assets/Live.png",
      "/src/assets/certified.png",
      "/src/assets/recorded.png",
      "/src/assets/community.png",
    ],
    Project: "8",
    type: "Advanced",
    MainHead: "AI Job Guarantee Program with Internship (1 Year)",
    Discription:
      "Secure your AI career with our 1-year Job Guarantee Program. Enjoy recorded/live classes, assignments, CRBS certifications, and 8+ AI projects. Engage in our AI community, Hackathons, and receive interview training, a 6-month internship, Money-Back Job Guarantee, and 100% Job Guarantee.",
    DiscountAmount: "60",
    OriginalAmount: "85",
  },
];
// Import Swiper styles
import "swiper/css/effect-cards";
import "swiper/css"; // Import Swiper styles

const YourComponent = () => {
  return (
    <Swiper
      // spaceBetween={2}
      // slidesPerView={2}

      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className=" xs:w-[22.5rem]  xs:h-[37.5rem] h-auto w-auto">
      {card.map((Card, index) => {
        return (
          <SwiperSlide
            key={index}
            className="p-0 m-0 w-[22.5rem]  xs:h-[37.5rem]">
            <Slide card={Card} />
          </SwiperSlide>
        );
      })}

      {/* ... Add more SwiperSlide components for additional slides */}
    </Swiper>
  );
};

export default YourComponent;
