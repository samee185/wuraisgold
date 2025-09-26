import { Btn } from "../../utils/Button";
import useEvent from "../../contexts/EventContext";

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
          Past Event
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
                img={event.images && event.images[0] ? event.images[0] : ""}
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                slug={event._id}
                action={event.action || "REGISTER NOW"}
                venue={event.venue}
                time={event.time}
                description={event.description}
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
                img={event.images && event.images[0] ? event.images[0] : ""}
                title={event.title}
                date={new Date(event.date).toLocaleDateString()}
                slug={event._id}
                action={event.action || "LEARN MORE"}
                venue={event.venue}
                time={event.time}
                description={event.description}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function Single({ img, title, date, slug, action, venue, time, description }) {
  return (
    <div className="flex flex-col w-full gap-5 p-5 bg-white rounded-xl">
      <img src={img} alt="" className="object-cover w-full aspect-video" />
      <div className="flex flex-col gap-2 ">
        <b className="text-xl text-black">{title}</b>
        <p className="text-primary">{date}</p>
        {venue && <p className="text-gray-700">Venue: {venue}</p>}
        {time && <p className="text-gray-700">Time: {time}</p>}
        {description && <p className="text-gray-500">{description}</p>}
      </div>
      <Btn name={action} slug={`/events/${slug}`} />
    </div>
  );
}
