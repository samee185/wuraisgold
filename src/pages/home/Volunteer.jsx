import { Btn } from "../../utils/Button";
import vol1 from "../../assets/vol/vol1.png";
import vol2 from "../../assets/vol/vol2.png";
import vol3 from "../../assets/vol/vol3.png";
import vol4 from "../../assets/vol/vol4.png";
import vol5 from "../../assets/vol/vol5.png";
import vol6 from "../../assets/vol/vol6.png";
import vol7 from "../../assets/vol/vol7.png";

export default function Volunteer() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="px-5 flex flex-col gap-5 mx-auto text-center md:w-2/3 items-center">
          <p className="text-primary">Volunteers</p>
          <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
            Our Volunteers
          </h3>
          <p>
            Wura Is Gold Charity Foundation seeks to bridge identified health
            and education gaps particularly for the children and young adults as
            any activity targeted at them will produce an all-encompassing
            result.
          </p>
          <Btn name="Become a volunteer" bg="#EB242B" id="/volunteer" />
        </div>
        <div className="w-full flex flex-col gap-10">
          <nav className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
            <SingleImg img={vol1} name="Wuraola Onigbogi" position="Founder" />
            <SingleImg
              img={vol2}
              name="Mbotidem Jackson"
              position="Program Lead"
            />
            <SingleImg img={vol3} name="Tobi Onigbogi" position="Legal Lead" />
          </nav>
          <nav className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
            <SingleImg
              img={vol4}
              name="Etuk Treasure"
              position="Research Analyst"
            />
            <SingleImg
              img={vol5}
              name="Alabi Goodness"
              position="Communication Analyst"
            />
            <SingleImg
              img={vol6}
              name="Agbeniyi John Ateta"
              position="Project Support Analyst"
            />
            <SingleImg
              img={vol7}
              name="Blessing James"
              position="Finance Lead"
            />
          </nav>
        </div>
      </div>
    </main>
  );
}

const SingleImg = ({ ...info }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3">
      <img src={info?.img} alt="" className="object-contain" />
      <b className="text-dark text-lg capitalize">{info?.name}</b>
      <p className="text-primary uppercase">{info?.position}</p>
    </div>
  );
};
