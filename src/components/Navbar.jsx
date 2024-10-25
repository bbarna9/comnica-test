import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

// This component is just a simple navigation bar containing the company's logo.
// I was thinking of making the right sidebar openable through a hamburger menu button
// from this component, but I liked the way it overlays the laptop image on the main component,
// so I stuck with this design.

// If you are visiting this page on a phone it will change background on scroll,
// and it will always stick to the top and overlay the page content, so that it's always reachable.

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen h-fit transition-all duration-300 z-30 py-3 pl-5 fixed top-0 left-0 ${
        scrolled ? "bg-white" : " bg-transparent"
      }`}
    >
      <img src={logo} alt="" className="" />
    </div>
  );
};

export default Navbar;
