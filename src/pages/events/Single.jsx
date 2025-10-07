import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import { useParams } from "react-router-dom";
import useEvent from "../../contexts/EventContext";
import { Btn } from "../../utils/Button";
import { FaCalendar, FaClock, FaMapMarker } from "react-icons/fa";

export default function Single() {
  const { id } = useParams();
  const { events, loading, error } = useEvent();
  const event = events.find(e => e._id === id || e.slug === id);

  if (loading.fetch) {
    return (
      <main className="py-10 text-center">
        <p className="text-gray-500">Loading event details...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="py-10 text-center">
        <p className="text-red-500">Failed to load event. Please try again.</p>
      </main>
    );
  }

  if (!event) {
    return (
      <main className="py-10 text-center">
        <p className="text-gray-500">Event not found.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center">
      <ScrollToTop />
      <Header />
      <section className="px-5 py-10 min-h-[50vh] w-full text-center flex flex-col gap-5 justify-center items-center text-white bg-primary">
        <h2 className="text-3xl md:text-5xl">{event?.title}</h2>
        <p>{event?.description}</p>
        <nav className="flex flex-col gap-5 md:flex-row">
          <p>
            <FaCalendar className="inline-block mr-2" /> {new Date(event?.date).toLocaleDateString()}
          </p>
          <p>
            <FaClock className="inline-block mr-2" /> {event?.time}
          </p>
          <p>
            <FaMapMarker className="inline-block mr-2" /> {event?.venue}
          </p>
        </nav>
      </section>
      <div className="flex flex-col items-center justify-center max-w-4xl px-5 py-10 text-left md:px-20 md:py-20 gap-7">
        {event.images && event.images[0] && (
          <img src={event.images[0]} alt={event.title} className="rounded-xl w-full max-h-96 object-cover" />
        )}
        {event.about && (
          <>
            <h4 className="text-3xl md:text-[40px] font-[600] text-black">About Event</h4>
            <p className="text-lg">{event.aboutEvent}</p>
          </>
        )}
        {event.webinar && (
          <>
            <h4 className="text-3xl md:text-[40px] font-[600] text-black">Webinar Invite</h4>
            <p className="text-lg">{event.webinar}</p>
          </>
        )}
        {event.type === "manual" && (
          <Btn name="Register Now" slug={`/events/${event._id}/register`} />
        )}
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}
