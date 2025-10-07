import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { events } from "../../utils/Events";
import { Btn } from "../../utils/Button";
import { FaCalendar, FaClock, FaMapMarker } from "react-icons/fa";

export default function Single() {
  let params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    events.filter((detail) => {
      if (detail.slug === params.id) {
        setInfo(detail);
      }
    });
  }, [params.id]);

  return (
    <main className="flex flex-col items-center">
      <ScrollToTop />
      <Header />
      <main className="px-5 py-10 min-h-[50vh] w-full text-center flex flex-col gap-5 justify-center items-center text-white bg-primary">
        <h2 className="text-3xl md:text-[64px] font-[500]">{info?.title}</h2>
        <p>{info?.text}</p>
        <nav className="flex flex-col gap-5 md:flex-row">
          <p>
            <FaCalendar className="inline-block mr-2" /> {info?.date}
          </p>
          <p>
            <FaClock className="inline-block mr-2" /> {info?.time}
          </p>
          <p>
            <FaMapMarker className="inline-block mr-2" /> {info?.location}
          </p>
        </nav>
      </main>
      <div className="flex flex-col items-center justify-center max-w-4xl px-5 py-10 text-left md:px-20 md:py-20 gap-7">
        <img src={info.hero} alt="" />
        <h4 className="text-3xl md:text-[40px] font-[600] text-black">
          About Event
        </h4>
        <p className="text-lg">{info.about}</p>
        <h4 className="text-3xl md:text-[40px] font-[600] text-black">
          Webinar Invite
        </h4>
        <p className="text-lg">{info.webinar}</p>
        {info.type==='manual' && <Btn name="Register Now" slug={`/events/${info?.slug}/register`} />}
      </div>
      <Subscribe />
      <Footer />{" "}
    </main>
  );
}
