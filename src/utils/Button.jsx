import { Link } from "react-router-dom";

// ✅ Primary Button (solid)
export function Btn({ name, bg = "#EB242B", id, style }) {
  return (
    <Link
      to={id}
      className={`inline-flex items-center justify-center 
        px-6 py-2.5 md:py-3 rounded-full 
        text-white font-semibold tracking-wide capitalize
        shadow-md hover:shadow-lg 
        transform transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${bg}]
        ${style}`}
      style={{ backgroundColor: bg }}
    >
      {name}
    </Link>
  );
}

// ✅ Secondary Button (outlined, transparent)
export function BtnB({ name, slug }) {
  return (
    <Link
      to={slug}
      className={`inline-flex items-center justify-center
        px-6 py-2.5 md:py-3 rounded-full
        border border-white text-white font-semibold tracking-wide
        bg-transparent backdrop-blur-sm
        hover:bg-white hover:text-black
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
    >
      {name}
    </Link>
  );
}

// ✅ Text Link Button (subtle, inline action)
export function BtnLink({ name, slug, color = "#EB242B" }) {
  return (
    <Link
      to={slug}
      className={`inline-flex items-center justify-center 
        font-medium underline decoration-2 underline-offset-4
        transition-colors duration-300 ease-in-out
        hover:opacity-80 active:opacity-60`}
      style={{ color }}
    >
      {name}
    </Link>
  );
}

// ✅ External Link Button (like primary but anchor)
export function Anchor({ name, bg = "#EB242B", slug, style }) {
  return (
    <a
      href={slug}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center 
        px-6 py-2.5 md:py-3 rounded-full
        text-white font-semibold tracking-wide capitalize
        shadow-md hover:shadow-lg 
        transform transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[${bg}]
        ${style}`}
      style={{ backgroundColor: bg }}
    >
      {name}
    </a>
  );
}
