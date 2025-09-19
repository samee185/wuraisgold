import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  // FaTwitter,
  FaYoutube,
  FaLinkedin,
  // FaMediumM,
  // FaTiktok,
} from "react-icons/fa";
// import sbo from "../assets/sbo.png";
// import kc from "../assets/kc.png";
// import gasus from "../assets/gasus.png";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white bg-dark lato text-sm md:text-base">
      <section className="px-5 md:px-20 w-full border-y border-[#E9E9E94D] leading-relaxed grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-1 py-5 md:py-12">
          <img src={logo} alt="" className="object-contain " />
          <p>
            Transforming lives with a heart of gold: Together, we pave the way
            for brighter tomorrow.
          </p>
        </div>
        <nav className="flex flex-col font-[400] gap-3 text-[#C9C9C9] py-2 md:py-12">
          <h4 className="text-white mb-2 font-[700] text-lg">Quick Links</h4>
          <Link to="/about">About</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/events">Events</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/gallery">Our Gallery</Link>
          <Link to="/donate-now">Donations</Link>
        </nav>
        <nav className="flex flex-col font-[400] gap-3 text-[#C9C9C9] py-2 md:py-12">
          <h4 className="text-white mb-2 font-[700] text-lg">Socials</h4>
          <a
            href="https://www.facebook.com/profile.php?id=100085435342360&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/wuraisgold_foundation?utm_source=qr&igsh=NzA5bTlydDVuaHkx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/wuraisgold-charity-foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://youtube.com/@wuraisgoldfoundation?si=jqB5tYVvT8jvHTJq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </nav>
        <nav className="flex flex-col font-[400] gap-3 text-[#C9C9C9] py-2 md:py-12">
          <h4 className="text-white mb-2 font-[700] text-lg">Location</h4>
          <p>No. 40, Road 12, Efab Estate, Abuja-Nigeria.</p>
          <p>enquiries@wuraisgold.org</p>
          <p>0813 1259 577</p>
          {/* <nav className="flex flex-col items-start gap-2 mt-4">
            <img src={sbo} alt="" />
            Trusted Business
          </nav> */}
        </nav>
      </section>
      <div className="flex flex-col gap-10 leading-loose px-5 md:px-20 py-5 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-10">
          <span className="text-sm">
            Your Trust, Our Promise: At WuraisGold, we guarantee unwavering
            dedication to our cause.
          </span>
          {/* <span className="hidden  md:flex flex-col md:flex-row text-center md:text-start gap-2 items-center">
            <img src={gasus} alt="" />
            <span className="text-sm">
              We are a business built on the <br className="hidden md:block" />{" "}
              foundation of Christian values and belief
            </span>
          </span> */}
        </div>
        <span className="w-full text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-center md:text-start">
            © WuraisGold Foundation
          </span>
          <div className="flex flex-col gap-4 items-center text-center">
            <nav className="flex gap-5 underline">
              <Link to="">Privacy Policy</Link>
              <Link to="">Terms of Service</Link>
              <Link to="">Security</Link>
            </nav>
          </div>
          <nav className="flex items-center justify-center gap-5  md:text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=100085435342360&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            {/* <FaTwitter /> */}
            <a
              href="https://www.instagram.com/wuraisgold_foundation?utm_source=qr&igsh=NzA5bTlydDVuaHkx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/wuraisgold-charity-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            {/* <FaMediumM /> */}
            <a
              href="https://youtube.com/@wuraisgoldfoundation?si=jqB5tYVvT8jvHTJq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            {/* <FaTiktok />
            <img src={kc} alt="" /> */}
          </nav>
        </span>
      </div>
    </footer>
  );
}
