import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Btn } from "../utils/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white w-full shadow-md px-5 md:px-20 py-2 flex justify-between items-center">
      <NavLink to="/" className="flex justify-start">
        <img src={logo} alt="" className="object-contain h-10 md:h-[unset]" />
      </NavLink>
      <nav
        className={`${
          open
            ? " left-0 top-16 px-5 py-5 md:bg-inherit "
            : " top-[-900%] left-0"
        } absolute md:static w-full bg-white z-[999999999] md:w-[unset] font-[500] flex flex-col md:flex-row shadow-md md:shadow-none  gap-3 md:gap-5 md:items-center transition-all duration-1000 ease-in-out overflow-y-scroll capitalise snap md:mx-10`}
      >
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/projects" className="">
          Our Projects
        </NavLink>
        <NavLink to="/events" className="">
          Events
        </NavLink>
        <NavLink to="/faq" className="">
          FAQ
        </NavLink>
        <NavLink to="/blogs" className="">
          Blog
        </NavLink>
        <NavLink to="/gallery" className="">
          Our Gallery
        </NavLink>
        <Btn
          name="DONATE NOW"
          bg="#EB242B"
          slug="/donate-now"
          style="md:hidden flex"
        />
      </nav>
      <Btn
        name="DONATE NOW"
        bg="#EB242B"
        slug="/"
        style="hidden md:flex"
      />
      {open ? (
        <FaTimes
          onClick={() => setOpen(!open)}
          className="block transition-all duration-1000 ease-in-out md:hidden"
        />
      ) : (
        <FaBars
          onClick={() => setOpen(!open)}
          className="block transition-all duration-1000 ease-in-out md:hidden"
        />
      )}
    </header>
  );
}
