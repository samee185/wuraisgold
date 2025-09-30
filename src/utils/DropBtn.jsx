import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";

function useOnHoverOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}

export default function DropBtn({ items, link }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeHoverMenu = () => {
    setOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <div
      className="w-fit font-medium normal-case"
      ref={dropdownRef}
      onClick={() => setOpen(!open)}
      // onMouseOver={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex items-center md:text-white capitalize md:justify-center cursor-pointer`}
      >
        {link} <span className="ml-1 text-[10px]">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <ul
          className={`bg-white w-full flex flex-col md:grid grid-cols-5 mt-[2px] overflow-y-auto md:absolute left-0 md:divide-x-2`}
        >
          {items?.map((item, i) => (
            <Link
              key={i}
              to={item.slug}
              className={`px-4 py-4 hover:bg-[#6B3F1D] bg-primary text-white cursor-pointer flex flex-col md:gap-36 items-start`}
            >
              <img
                src={item.img}
                alt=""
                className="h-10 w-10 hidden md:block"
              />
              <div className="flex flex-col gap-2">
                <b className="md:text-lg"> {item.name}</b>
                <p className=" text-sm hidden md:block">{item.text}</p>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
