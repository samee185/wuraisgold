// import { Btn } from "../../utils/Button";
import abt from "../../assets/home1.png";

export default function About() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="px-5 flex flex-col gap-5 mx-auto text-center md:w-2/3 items-center">
          <p className="text-primary">About Us</p>
          <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
            Transforming lives with a heart of gold
          </h3>
          <p>
            WuraisGold Charity Foundation is a highly reputable non-governmental
            organization headquartered in Abuja. Established on November 5th,
            2021, and registered as a corporate entity, our foundation is
            dedicated to addressing the needs of vulnerable individuals and
            young adults nationwide.
          </p>
          {/* <Btn name="Become a volunteer" bg="#EB242B" slug="/volunteer" /> */}
        </div>
        <div className="w-full flex flex-col-reverse md:grid grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-5 md:text-lg">
            <p>
              Our overarching mission is to enhance their quality of life and
              overall well-being. With an extensive network of outreach centers
              strategically located throughout the country, we have established
              a strong presence in various regions. This enables us to serve our
              target demographic effectively and achieve significant project
              milestones. We pride ourselves on fostering valuable partnerships
              with critical stakeholders that significantly contribute to the
              successful implementation of our initiatives.
            </p>
            <p>
              At WuraisGold Charity Foundation, we are committed to making a
              lasting impact on the lives of those we serve. We strive to uplift
              and empower the individuals we assist through our meticulous
              planning, innovative strategies, and relentless dedication. By
              leveraging our expertise, resources, and collaborative efforts, we
              continuously work towards creating a positive and sustainable
              change within our nation. Join us in our noble endeavour to
              transform the lives of vulnerable individuals and young adults,
              and together, we can build a brighter future for our nation.
            </p>
          </div>
          <figure className="w-full">
            <img src={abt} alt="" className="object-cover w-full" />
          </figure>
        </div>
      </div>
    </main>
  );
}
