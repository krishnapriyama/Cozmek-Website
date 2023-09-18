const slide = ({ card }) => {
  // console.log(card);
  return (
    <div className=" w-auto h-full container  bg-white rounded-xl overflow-hidden border-2  relative">
      <div>
        <img
          className="h-[11.8rem] w-[22.5rem]"
          src={card?.mainImage}
          alt="CardImage"
        />
      </div>
      <div
        className="w-auto flex xs:w-[246.51px] items-center gap-5 absolute top-[11rem] left-8"
        style={{
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
        <div
          className="relative w-auto xs:w-[91.01px]"
          style={{ height: "31px" }}>
          {card?.roundImages.map((img, index) => {
            return (
              <img
                key={index}
                className={`w-[29.19px] h-[29.19px]  top-0 left-[${
                  card?.roundImages.length * 20 - index * 20
                }px]  absolute rounded-full border border-gray-400`}
                src={img}
              />
            );
          })}
        </div>
        <div
          className="text-center text-gray-700 text-16 font-kanit font-normal leading-28 "
          style={{ wordWrap: "break-word" }}>
          + {card?.Project} Projects
        </div>
      </div>

      <div className="p-4 pt-8">
        <h4 className="font-sans text-[#9393b6] pb-4">{card?.type}</h4>
        <h1 className="text-2xl text-[#0B7077] font-sans font-bold">
          {card?.MainHead}
        </h1>
        <p className="text-sm font-sans text-[#7b7b96] py-2">
          {card?.Discription}
        </p>
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3 font-extrabold">
            <h2 className="text-red-500">₹ {card?.DiscountAmount}K</h2>
            <h2 className="line-through">₹ {card?.OriginalAmount}K</h2>
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
