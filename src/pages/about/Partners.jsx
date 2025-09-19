import { Btn } from "../../utils/Button";
import partner1 from "../../assets/partner1.png";

export default function Partners() {
  return (
    <main className="px-5 md:px-20 flex flex-col gap-10 md:gap-14 py-10 items-center">
      <div className="px-5 flex flex-col gap-5 mx-auto text-center">
        <p className="text-primary">Partners</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          Our Partners
        </h3>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10">
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
        <img src={partner1} alt="" className="object-contain w-full" />
      </div>
      <Btn name="Become A Partner" slug="/partners" />
    </main>
  );
}
