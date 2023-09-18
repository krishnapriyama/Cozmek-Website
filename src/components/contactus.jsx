import Lottie from "react-lottie";
import animationData from "../assets/contactus_animation.json";

const contactus = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="w-full md:flex bg-[#0B7077] bg-opacity-[63%] text-[#FFFFFF]">
        <div className="w-1/2">
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
        <div className="w-1/2">
          <div className="w-[80%] flex flex-col gap-5">
            <div className="flex justify-center">
              <button className="bg-[#FFFFFF] bg-opacity-[13%] px-5 py-2 rounded-3xl text-[16px]">
                WANT TO JOIN ?!
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-center">
                Prepare yourself to enhance your skills and adapt your
                perspective to <br />
                align with the demands of the next century using COZMEK
                <br />
                <span className="font-bold">
                  No ads, No trails, No commitments
                </span>
              </p>
            </div>

            <div className="flex justify-center ">
              <div className="w-full max-w-lg bg-white px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-[#242731] text-[31px] font-bold">
                    Get to know the COURSE !
                  </label>
                  <p className="text-[#575F6E] text-sm">
                    Fill in the registration data. It will take a couple of
                    minutes.
                    <br />
                    All you need is a phone number and e-mail
                  </p>
                </div>

                <form className="">
                  <div className="mb-4">
                    <label className="text-black">USename</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Sign In
                    </button>
                    <a
                      className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactus;
