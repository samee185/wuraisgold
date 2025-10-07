import { Btn } from "../../utils/Button";
import useEvent from "../../contexts/EventContext";
import Single from "../../components/Single";

export default function Events() {
  const { events, loading, error } = useEvent();

  // Example: filter events by upcoming/past if you have a date property
  const now = new Date();
  const upcomingEvents = events.filter(e => new Date(e.date) >= now);
  const pastEvents = events.filter(e => new Date(e.date) < now);

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
          {loading.fetch ? (
            <p>Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : upcomingEvents.length === 0 ? (
            <p>No upcoming events found.</p>
          ) : (
            upcomingEvents.map(event => (
              <Single
                key={event._id}
                id={event._id}
                img={event.images && event.images[0] ? event.images[0] : ""}
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                text={event.description}
                slug={`/events/${event._id}`}
                venue={event.venue}
                time={event.time}
                action={event.action || "REGISTER NOW"}
              />
            ))
          )}
        </div>
      </section>
      <section className="flex flex-col gap-5" id="past">
        <h5 className="text-xl md:text-2xl font-[600] text-black">
          Past Events
        </h5>
        <div className="flex flex-col grid-cols-3 gap-10 md:grid">
          {loading.fetch ? (
            <p>Loading events...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : pastEvents.length === 0 ? (
            <p>No past events found.</p>
          ) : (
            pastEvents.map(event => (
              <Single
                key={event._id}
                id={event._id}
                img={event.images && event.images[0] ? event.images[0] : ""}
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                text={event.description}
                slug={`/events/${event._id}`}
                venue={event.venue}
                time={event.time}
                action={event.action || "LEARN MORE"}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

// ...existing code...
