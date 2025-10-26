import React from "react";
import Headline from "../../components/common/Headline";
import img1 from "../../assets/images/about_img_1.jpg";
import img2 from "../../assets/images/about_img_2.jpg";
import img3 from "../../assets/images/about_img_3.jpg";
const About = () => {
  return (
    <main>
      {/* Headline 1 */}
      <div className="headline container mx-auto px-4 py-4">
        <Headline> About us</Headline>
      </div>

      {/* Section 1 */}
      <section className="grid lg:grid-cols-3 md:grid-cols-2 ">
        <div className="col-span-2 h-full flex flex-col justify-between px-5 py-[30px] bg-purple-color">
          <h2 className="font-bold uppercase font-anek-tamil text-[45px] leading-[91%] tracking-[-3%] ">
            Tap into Your Primal Power. Forge a Stronger You.
          </h2>

          <div className="flex flex-col gap-2">
            <h5 className="font-bold font-anek-tamil text-[22px] leading-[131%] tracking-[-3%]">OUR Vision</h5>
            <p className="text-base font-geist leading-[131%] tracking-[1%]">Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.</p>
          </div>
        </div>
        <img
          src={img1}
          alt="section1_img"
          className="w-full max-h-[480px] object-cover"
        />
      </section>

      {/* Secction 2 */}
       <section className="grid lg:grid-cols-3 md:grid-cols-2 ">
        
        <img
          src={img1}
          alt="section1_img"
          className="col-span-2 w-full max-h-[480px] object-cover"
        />
        <div className=" h-full flex flex-col justify-between px-5 py-[30px] bg-light-purple-color">
          <h2 className="font-bold uppercase font-anek-tamil text-[45px] leading-[91%] tracking-[-3%] ">
            DYNAMIC OPEN GYM
          </h2>

          
            <p className="text-base font-geist leading-[131%] tracking-[1%]">At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.</p>
          
        </div>
      </section>


      {/* Section 3 */}
    
    </main>
  );
};

export default About;
