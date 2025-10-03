import home1 from "../../assets/home1.png";
import { Btn } from "../../utils/Button";

export default function About() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-16 md:items-center">
        <figure className="w-full">
          <img src={home1} alt="" className="object-cover w-full" />
        </figure>
        <div className="flex flex-col gap-5">
          <p className="text-primary">About Us</p>
          <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
            Transforming lives with a heart of gold
          </h3>
          <p className="md:text-lg">
            At WuraisGold Charity Foundation, we are committed to making a
            lasting impact on the lives of those we serve. We strive to uplift
            and empower the individuals we assist through our meticulous
            planning, innovative strategies, and relentless dedication.
          </p>
          <Btn name="READ ABOUT US" id="/about" />
        </div>
      </div>
    </main>
  );
}
