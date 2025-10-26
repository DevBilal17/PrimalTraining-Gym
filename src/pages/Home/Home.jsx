import React from "react";
import img1 from "../../assets/images/home_img_1.png";
import img2 from "../../assets/images/home_img_2.png";
import Button from "../../components/common/Button";
const Home = () => {
  return (
    <main>
      {/* Headline */}
      <div className="headline container mx-auto px-4 py-4">
        <h1 className="font-extrabold text-[116px] leading-[110%] tracking-[-5%] font-anek-tamil uppercase">
          Train Hard. <span className="text-purple-color">Live Better</span>
        </h1>
      </div>
      {/* Section 1 */}
      <section className="grid grid-cols-3">
        <img
          src={img1}
          alt="section1_img"
          className=" col-span-2 w-full max-h-[480px] object-cover"
        />
        <div className="flex flex-col justify-between p-5 bg-light-purple-color pb-10 ">
          <h2 className="font-anek-tamil font-bold text-[45px] leading-[91%] tracking-[-3%] uppercase">
            For the committed
          </h2>
          <div className="flex gap-5 flex-col ">
            <p className="font-geist text-base leading-[131%] tracking-[1%] max-w-[375px]">
              Train like an athlete with top-tier equipment and expert
              programming. Whether you're building muscle or breaking PRs, we
              help you push past limits.
            </p>
            <Button className="uppercase w-fit hover:bg-[#808CFD]  transition-all duration-100 cursor-pointer">
              About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="grid grid-cols-3">
        <div className="flex flex-col justify-between p-5 pb-10 bg-light-purple-color border-b border-r border-black">
          <h2 className="font-anek-tamil font-bold text-[45px] leading-[91%] tracking-[-3%] uppercase">
            Guided by experts
          </h2>

          <p className="font-geist text-base leading-[131%] tracking-[1%] max-w-[375px]">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals and unlock your full
            potential.
          </p>
        </div>
        <div className="flex flex-col justify-between p-5 pb-10 bg-light-purple-color border-b border-black">
          <h2 className="font-anek-tamil font-bold text-[45px] leading-[91%] tracking-[-3%] uppercase">
            DYNAMIC OPEN GYM
          </h2>

          <p className="font-geist text-base leading-[131%] tracking-[1%] max-w-[375px]">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools, ample
            training areas, and a focus on functional movement.
          </p>
        </div>

        <img
          src={img2}
          alt="section2_img"
          className="w-full max-h-[480px] object-cover"
        />
      </section>
    </main>
  );
};

export default Home;
