import img2 from "../../assets/events/event2.png";
import img3 from "../../assets/events/event3.png";
import img4 from "../../assets/events/event4.png";
import immunization from "../../assets/immunization.jpg";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import { Slider as Slide } from "@mui/material";
import { Btn } from "../../utils/Button";

export default function Events() {
  return (
    <main className="flex flex-col gap-10 px-5 py-10 md:px-20 md:gap-20">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col gap-5 px-5 mx-auto text-center">
          <p className="text-primary">Events & Campaigns</p>
          <h3 className="text-xl md:text-[40px] text-dark font-bold leading-snug">
           Past and Upcoming Events
          </h3>
        </div>
        <div className="flex flex-col grid-cols-3 gap-10 md:grid">
          <Single
            img={immunization}
            title="Immunization Truth: Separating Fact from Fiction"
            date="May 31st, 2025"
            id="immunization-truth-separating-fact"
          />
          <Single
            img={img4}
            title="Unlock A Healthier You"
            date="January 13, 2024"
            id="unlock-a-healthier-you"
          />
          <Single
            img={img3}
            title="Kuchingoro idp Abuja camp"
            date="17th December, 2021"
            id=""
          />
          <Single
            img={img2}
            title="Iwaya Community, Lagos Outreach"
            date="28th December, 2021"
            slug=""
          />
        </div>
      </div>
    </main>
  );
}

function Single({ ...info }) {
  return (
    <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-xl">
      <img src={info?.img} alt="" className="object-cover w-full aspect-video" />
      <div className="flex flex-col gap-2 ">
        <b className="text-xl text-black">{info?.title}</b>
        <p className="text-primary">{info?.date}</p>
      </div>
      {/* <Box width={"100%"}>
        <Slide
          value={30}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{
            color: "#E3272F",
            height: 10,
          }}
          onChange={(e) => console.log(e.target.value)}
        />
      </Box>
      <div className="grid grid-cols-3 gap-2">
        <nav className="flex flex-col gap-1">
          <b className="text-black">Goal</b>
          <p className="text-primary">N 500,000</p>
        </nav>
        <nav className="flex flex-col gap-1">
          <b className="text-black">Raised</b>
          <p className="text-[#009C19]">N 200,000</p>
        </nav>
        <nav className="flex flex-col gap-1">
          <b className="text-black">To-go</b>
          <p className="text-primary">N 300,000</p>
        </nav>
      </div> */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {info.slug === '' && <Btn
          name="VOLUNTEER"
          slug={`/volunteer/${info?.slug}`}
          style="w-full"
        />}
        {info.slug !== '' && <Btn name="Register Now" slug={`/events/${info?.slug}`} />}
        <Link
          to={`/donate-now`}
          className={`min-w-fit w-full bg-inherit h-10 md:h-12 uppercase font-[500] md:font-[600] flex items-center justify-center px-5 `}
        >
          DONATE NOW
        </Link>
      </div>
    </div>
  );
}
