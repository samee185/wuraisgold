import img from "../../assets/proj-bg.png";
import arrow from "../../assets/icons/arrow.png";
import icon1 from "../../assets/icons/icon5.png";
import icon2 from "../../assets/icons/icon1.png";
// import icon3 from "../../assets/icons/icon6.png";
import { Btn } from "../../utils/Button";

export default function Donate() {
  return (
    <main className="flex flex-col gap-10 md:gap-14 py-10">
      <div
        className="w-full relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-2 gap-10 md:gap-20 justify-center items-start text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-[60px] font-bold leading-normal">
            Fundraising for the people and causes you care about
          </h2>
          <Btn name="Donate to our course" id="/donate-now" />
        </div>
        <div className="w-full flex flex-col md:grid grid-cols-2 gap-5 items-center">
          <div className="h-full w-full flex items-start">
            <div className="w-full flex flex-col text-center items-center justify-between p-5 gap-5 md:gap-16 bg-primary text-white rounded-xl">
              <nav className="flex flex-col gap-2 items-center justify-center">
                <img src={icon1} alt="" />
                <p className="text-2xl md:text-[32px]">40+</p>
                <p>Successful Campaigns</p>
              </nav>
              <nav className="flex flex-col gap-2 items-center justify-center">
                <p>Upcoming Campaigns</p>
                <img src={arrow} alt="" />
              </nav>
            </div>
          </div>
          <div className="h-full w-full flex items-end md:mt-10">
            <div className="w-full flex flex-col text-center items-center justify-between p-5 gap-5 md:gap-20 bg-[#FFDADA] text-black rounded-xl">
              <nav className="flex flex-col gap-2 items-center justify-center">
                <img src={icon2} alt="" />
                <p className="text-2xl md:text-[32px]">80+</p>
                <p>Incredible Volunteers</p>
              </nav>
              <nav className="flex flex-col gap-2 items-center justify-center">
                <img src={arrow} alt="" />
              </nav>
            </div>
          </div>
          {/* <div className="flex flex-col text-center items-center justify-between p-5 gap-5 md:gap-16 bg-[#FFDFB9] text-black rounded-xl">
              <nav className="flex flex-col gap-2 items-center justify-center">
                <img src={icon3} alt="" />
                <p className="text-2xl md:text-[32px]">1,000,000</p>
                <p>raised by 5 persons</p>
              </nav>
              <nav className="flex flex-col gap-2 items-center justify-center">
                <img src={arrow} alt="" />
              </nav>
            </div> */}
        </div>
      </div>
    </main>
  );
}
