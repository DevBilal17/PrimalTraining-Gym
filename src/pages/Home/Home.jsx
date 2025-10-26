import React from "react";
import img1 from "../../assets/images/home_img_1.png";
import img2 from "../../assets/images/home_img_2.png";
import img3 from "../../assets/images/home_img_3.png";
import Button from "../../components/common/Button";
const Home = () => {
  return (
    <main>
      {/* Headline 1 */}
      <div className="headline container mx-auto px-4 py-4">
        <h1 className="font-extrabold xl:text-[116px] md:text-[71px] text-[37px] leading-[110%] tracking-[-5%] font-anek-tamil uppercase">
          Train Hard. <span className="text-purple-color">Live Better</span>
        </h1>
      </div>
      {/* Section 1 */}
      <section className="grid sm:grid-cols-3">
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
      <section className="grid sm:grid-cols-3">
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

      {/* Headline 2 */}
      <div className="headline container mx-auto px-4 py-4">
        <h1 className="font-extrabold  xl:text-[116px] md:text-[71px] text-[37px]  leading-[110%] tracking-[-5%] font-anek-tamil uppercase">
          Join the <span className="text-purple-color">Community</span>
        </h1>
      </div>

      {/* Section 3 */}
      <div className="grid sm:grid-cols-3">
        <div className="bg-light-purple-color">
          <ul>
            <li className="border-t border-black p-5">
              <h2 className="font-bold uppercase font-anek-tamil leading-[91%] tracking-[-3%] text-[45px]">
                Discover your potential
              </h2>
            </li>
            <li className="border-t border-black p-5 flex flex-col gap-1.5">
              <h3 className="font-anek-tamil font-bold leading-[91%] tracking-[-3%] text-2xl">Expert coaching</h3>
              <p className="font-geist leading-[131%] tracking-[1%] text-base">Trainers who are passionate about your progress.</p>
            </li>
             <li className="border-t border-black p-5 flex flex-col gap-1.5">
              <h3 className="font-anek-tamil font-bold leading-[91%] tracking-[-3%] text-2xl">Results-Driven Programs</h3>
              <p className="font-geist leading-[131%] tracking-[1%] text-base">Workouts that deliver tangible, measurable results.</p>
            </li>
             <li className="border-t border-black p-5 flex flex-col gap-1.5">
              <h3 className="font-anek-tamil font-bold leading-[91%] tracking-[-3%] text-2xl">A Supportive Tribe</h3>
              <p className="font-geist leading-[131%] tracking-[1%] text-base">A community that pushes you to be your best.</p>
            </li>
            <li className="border-t border-black p-5 h-full">
              <Button className="uppercase w-fit hover:bg-[#808CFD]  transition-all duration-100 cursor-pointer">
                View classes
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <img
            src={img3}
            alt="section3_img"
            className="object-cover w-full max-h-[500px] h-full"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className="bg-purple-color w-full min-h-[480px] h-full flex flex-col items-center justify-center gap-[18px] px-4">
         <p className="uppercase font-geist text-base leading-[131%] tracking-[1%] text-center">WHAT WE BELIEVE IN</p>
         <h3 className="text-center font-anek-tamil font-bold leading-[100%] tracking-[-5%] text-[57px] uppercase">Join the Primal Tribe Today!</h3>
        <div className="w-full flex justify-center">
          <Button className='bg-light-purple-color uppercase cursor-pointer hover:drop-shadow-lg'>
          Reserve your spot
         </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
