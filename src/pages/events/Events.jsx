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
    <div className="w-full flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white">
          <h3 className="text-lg font-bold drop-shadow-lg">{title}</h3>
          <p className="text-sm text-primary drop-shadow">{date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5">
        {venue && <p className="text-gray-700 font-medium"><span className="font-semibold text-primary">Venue:</span> {venue}</p>}
        {time && <p className="text-gray-700 font-medium"><span className="font-semibold text-primary">Time:</span> {time}</p>}
        {description && <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{description}</p>}
      </div>
      <div className="w-full px-5 pb-5">
        <Btn
          name={action}
          id={`/events/${slug}`}
          className="block w-full bg-primary text-white text-center py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition-all"
        />
      </div>
    </div>
  );
}
