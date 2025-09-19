import { Btn } from "../../utils/Button";
import img1 from "../../assets/events/event1.png";
import img2 from "../../assets/events/event2.png";
import img3 from "../../assets/events/event3.png";
import img4 from "../../assets/ev.jpeg";
import immunization from "../../assets/immunization.jpg";

export default function Events() {
  return (
    <main className="flex flex-col gap-10 px-5 py-10 md:px-20 md:py-20">
      <nav className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <a
          href="#up"
          className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] rounded-full text-white flex items-center justify-center px-8 bg-primary`}
        >
          Upcoming Events
        </a>
        <a
          href="#past"
          className={`min-w-fit w-fit h-10 md:h-12 font-[500] md:font-[600] rounded-full bg-white flex items-center justify-center px-8`}
        >
          Past Events
        </a>
      </nav>
      <section className="flex flex-col gap-5" id="up">
        <h5 className="text-xl md:text-2xl font-[600] text-black">
          Upcoming Events
        </h5>
        <div className="flex flex-col grid-cols-3 gap-10 md:grid">
          <Single
            img={immunization}
            title="Immunization Truth: Separating Fact from Fiction"
            date="May 31st, 2025"
            slug="immunization-truth-separating-fact"
            action="REGISTER NOW"
          />
        </div>
      </section>
      <section className="flex flex-col gap-5" id="past">
        <h5 className="text-xl md:text-2xl font-[600] text-black">
          Past Events
        </h5>
        <div className="flex flex-col grid-cols-3 gap-10 md:grid">
          <Single
            img={img4}
            title="Unlock A Healthier You"
            date="January 13, 2024"
            slug="unlock-a-healthier-you"
            action="LEARN MORE"
          />
          <Single
            img={img1}
            title="Ibadan Outreach"
            date="January 3, 2024"
            slug="/"
            action="LEARN MORE"
          />
          <Single
            img={img2}
            title="Iwaya Community"
            date="December 28, 2023"
            slug="/"
            action="LEARN MORE"
          />
          <Single
            img={img3}
            title="Kuchingoro idp Abuja camp"
            date="December 17, 2023"
            slug="/"
            action="LEARN MORE"
          />
        </div>
      </section>
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
      <Btn name={info?.action} slug={`/events/${info?.slug}`} />
    </div>
  );
}
