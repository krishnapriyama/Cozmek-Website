const slide = ({card}) => {
  console.log(card)
  return (
    <div className=" w-[316px] h-[508px] container  bg-white rounded-lg  border-2  relative">
      <div>
        <img src={card?.mainImage} alt="CardImage" />
      </div>
      <div
        className="flex items-center gap-5 absolute top-[9rem] left-8"
        style={{
          width: "246.51px",
          height: "41px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
          background: "#FAFAFA",
          borderRadius: "40px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
        <div className="relative" style={{ width: "91.01px", height: "31px" }}>
        <img
            className="w-[29.19px] h-[29.19px] left-[80px] top-0 absolute rounded-full border border-gray-400"
            src="https://via.placeholder.com/29x29"
          />
          <img
            className="w-[29.19px] h-[29.19px] left-[60px] top-0 absolute rounded-full border border-gray-400"
            src="https://via.placeholder.com/29x29"
          />
          <img
            className="w-[29.19px] h-[29.19px] left-[40px] top-0 absolute rounded-full border border-gray-400"
            src="https://via.placeholder.com/29x29"
          />
          <img
            className="w-[29.19px] h-[29.19px] left-[20px] top-0 absolute rounded-full border border-gray-400"
            src="https://via.placeholder.com/29x29"
          />
          <img
            className="w-[29.19px] h-[29.19px] left-[0px] top-0 absolute rounded-full border border-gray-400"
            src="https://via.placeholder.com/31x29"
          />
        </div>
        <div
          className="text-center text-gray-700 text-16 font-kanit font-normal leading-28"
          style={{ wordWrap: "break-word" }}>
          +
        </div>
        <div
          className="flex items-start gap-2"
          style={{
            width: "78.77px",
            height: "18px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}>
          <div
            className="w-9 text-center text-gray-700 text-16 font-raleway font-semibold leading-18"
            style={{ wordWrap: "break-word" }}>
            2
          </div>
          <div
            className="text-center text-gray-700 text-14 font-raleway font-semibold leading-18"
            style={{ wordWrap: "break-word" }}>
            Projects
          </div>
        </div>
      </div>

      <div className="p-4 pt-8">
        <h4 className="font-sans text-[#9393b6] pb-4">Basic</h4>
        <h1 className="text-2xl text-[#0B7077] font-sans font-bold">
          AI Crash Course Program (6 Months)
        </h1>
        <p className="text-sm font-sans text-[#7b7b96] py-2">
          Fast-track your AI skills in our 6-month program, featuring recorded
          classes, assignments, practical sessions, CRBS exams, certifications,
          personal mentorship, 2 projects, AI community access, and 100%
          placement assistance.
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3 font-extrabold">
            <h2 className="text-red-500">₹ 15K</h2>
            <h2 className="line-through">₹ 35K</h2>
          </div>
          <button className="bg-[#0B7077] p-2 rounded-md text-white capitalize">
            enroll now
          </button>
        </div>
      </div>
    </div>
  );
};

export default slide;



