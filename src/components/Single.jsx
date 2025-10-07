import { Btn } from "../utils/Button";

export default function Single({ id, img, title, date, text, slug }) {
  // Determine route based on context
  let route = ""; 
  if (window.location.pathname.includes("events")) {
    route = `/events/${id}`;
  } else if (window.location.pathname.includes("projects")) {
    route = `/projects/${id}`;
  } else if (window.location.pathname.includes("blogs")) {
    route = `/blogs/${id}`;
  } else {
    route = slug ? `/blogs/${slug}` : `/blogs/${id}`;
  }

  return (
    <div className="relative rounded-3xl shadow-lg overflow-hidden group bg-white flex flex-col h-full">
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700 text-sm line-clamp-3 mb-4 flex-1">{text}</p>
        <div className="mt-auto">
          <Btn name="Read More" id={route} />
        </div>
      </div>
    </div>
  );
}
