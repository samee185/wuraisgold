import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import { Btn } from "../../utils/Button";

export default function Program() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:items-center">
        <div className="flex flex-col gap-5">
          <p className="text-primary">Our Commitment</p>
          <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
            Solving Societal Problems and Building a Future for the Coming
            Generation
          </h3>
          <p className="md:text-lg">
            At WuraisGold, we believe in the transformative power of compassion
            and action. Join us in our mission to create lasting impact and
            build a world where every heart shines with hope and opportunity.
          </p>
          <Btn name="Donate now" id="/donate-now" />
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-10">
          <Single
            title="Education"
            img={icon1}
            text="We help young children gain quality education"
          />
          <Single
            title="Capacity Building"
            img={icon2}
            text="We help empower communities through capacity building initiatives"
          />
          <Single
            title="Health Care & Welfare"
            img={icon3}
            text="We help people in rural areas to get better access to quality healthcare"
          />
          <Single
            title="Bible Drive"
            img={icon4}
            text="We help spread hope and faith by organizing Bible drives to those in need"
          />
        </div>
      </div>
    </main>
  );
}

const Single = ({ title, img, text }) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <img src={img} alt="" className="object-contain" />
      <h3 className="text-lg md:text-2xl text-dark font-bold">{title}</h3>
      <p className="md:text-lg">{text}</p>
    </div>
  );
};
