import { Btn } from "../../utils/Button";
import proj1 from "../../assets/blog1.png";
import proj2 from "../../assets/blog2.png";
import proj3 from "../../assets/blog3.png";
import img from "../../assets/become.jpg";
import dp1 from "../../assets/dp1.png";
import dp2 from "../../assets/dp2.png";
import dp3 from "../../assets/dp3.png";
import dp4 from "../../assets/dp4.png";
import dp5 from "../../assets/dp5.png";

export default function  Blog() {
  return (
    <main className="flex flex-col gap-10 md:gap-14 py-10 md:py-20">
      <div className="px-5 flex flex-col gap-3 mx-auto text-center">
        <p className="text-primary">Our Stories</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          Our Blogs
        </h3>
      </div>
      <div className="px-5 md:px-20 flex flex-col md:grid grid-cols-3 gap-10">
        <Single
          img={proj1}
          title="Quality Education & Training"
          date="Education | March 5, 2023"
          slug="quality-education-and-training"
          text="The foundation recognizes the importance of Goal 4, which aims to provide quality education and training to promote lifelong learning opportunities for everyone while ensuring inclusivity and equity."
        />
        <Single
          img={proj2}
          title="Good Health & Wellbeing "
          date="Medical Help | March 5, 2023 "
          slug="good-health-and-wellbeing"
          text="Sustainable Development Goal 3 (SDG 3), or Global Goal 3, aims to promote good health and well-being for people of all ages. The United Nations established this goal in 2015 "
        />
        <Single
          img={proj3}
          title="Bible Drive"
          date="January 1, 2024"
          slug="bible-drive"
          text="Spread the Word: Join Our Bible Drive to Make a Difference. Are you looking for a way to make a profound impact in the lives of individuals and communities around the world? We invite you to join our Bible Drive"
        />
      </div>
      <button className="text-primary underline font-bold mx-auto">
        See All
      </button>
      <div
        className="w-full min-h-[70vh] relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 md:py-20 flex justify-end items-center text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
        <div className="flex flex-col gap-5 md:w-1/2">
          <h2 className="text-3xl md:text-[44px] font-extrabold leading-normal">
            Become a part of {`WuraisGold's`} impactful journey by
            volunteering your time and skills.
          </h2>
          <Btn name="Become a volunteer" slug="/volunteer" />
        </div>
      </div>

      <div className="px-5 flex flex-col gap-3 mx-auto text-center">
        <p className="text-primary">Testimonial</p>
        <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
          What People Say About Us
        </h3>
      </div>
      <div className="px-5 md:px-20 flex overflow-x-scroll snap gap-6">
        <TestSingle
          icon={dp1}
          title="Volunteer"
          name="Treasure Chris ETuk"
          text="WGCF’s dedication to community empowerment is evident in every project. From educational workshops and health clinics to vocational training and environmental conservation efforts, each program is carefully planned and executed with a focus on long-term impact."
        />
        <TestSingle
          icon={dp2}
          title="Medical Doctor"
          name="Dr. Seun Oluwafemi"
          text="I am privileged to be part of this FOUNDATION. My experience participating at the WGCF outreach was a nice experience. I was among the medical team as a medical doctor, checking the well-being of the people, counselling them, and prescribing medications for them."
        />
        <TestSingle
          icon={dp3}
          title="Volunteer"
          name="Timilehin Atayero"
          text="Participating in WGCF outreach programs was truly a rewarding experience, I had the opportunity to make a positive impact on the lives of others and contribute to the betterment of my community. It was a humbling experience that taught me valuable lessons that I will carry for life."
        />
        <TestSingle
          icon={dp4}
          title="Volunteer"
          name="Praise Shaguy"
          text="Participating in the WGCF outreaches has been amazing. I remember one outreach where I got to preach to the children. It was very fulfilling, and everyone had something to do. Even though I was meeting many people for the first time, it felt like a family. I look forward to more outreaches in Lagos."
        />
        <TestSingle
          icon={dp5}
          title="Volunteer"
          name="Oluwabori Atayero"
          text="WGCF is an amazing foundation that takes sharing the gospel to the unreached as a core. I was part of one of their many outreaches in Ibadan to a children’s home and it was a beautiful experience. It was not a rushed visit. You’ll see evidence of proper and adequate planning."
        />
      </div>
    </main>
  );
}

function Single({ ...info }) {
  return (
    <div className="w-full flex flex-col  gap-5 bg-white p-5 rounded-xl">
      <img src={info?.img} alt="" className="w-full object-cover" />
      <div className="flex flex-col gap-2">
        <b className="text-xl text-black">{info?.title}</b>
        <p className="text-primary">{info?.date}</p>
      </div>
      <p className="mb-auto">{info?.text}</p>
      <Btn name="Read More" slug={`/blogs/${info?.slug}`} />
    </div>
  );
}

const TestSingle = ({ icon, title, text, name }) => {
  return (
    <nav
      className={`min-w-[90%] w-[90%] md:min-w-[30%] md:w-[30%] bg-white border md:flex flex-col gap-5 px-5 py-5 md:py-10 shad rounded-lg justify-evenly`}
    >
      <q className="text-light">{text}</q>
      <div className="flex gap-2 items-center">
        <img
          src={icon}
          alt=""
          className="h-10 md:h-14 w-10 md:w-14 rounded-[50%] object-cover object-top"
        />{" "}
        <p className="flex flex-col gap-1">
          <span className="md:text-xl uppercase font-[500]">{name}</span>
          <small className=" text-sm uppercase">{title}</small>
        </p>
      </div>
    </nav>
  );
};
