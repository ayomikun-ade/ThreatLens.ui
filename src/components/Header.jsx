import { Link } from "react-router";

const Header = () => {
  return (
    <header className="fixed font-main top-0 right-0 left-0 flex px-2 md:px-0 py-3 z-10 backdrop-blur-sm rounded-lg mx-auto max-w-[1300px] w-[95%] md:w-[80%] h-[9vh] md:h-[10vh] items-center justify-between">
      <h2 className="font-main text-white text-3xl md:text-5xl font-semibold">
        <Link
          className="focus-visible:outline-neutral-300"
          aria-label="Site logo and link to landing/home page"
          to="/"
        >
          ThreatLens
        </Link>
      </h2>
      <div className="flex items-center gap-3 md:gap-4">
        <Link
          to="/about"
          aria-label="link to about page"
          className="text-lg md:text-xl uppercase text-white hover:scale-105 transition duration-300 hover:ease-in-out"
        >
          About
        </Link>
        {/* <Link
          to="https://www.github.com/ayomikun-ade/ThreatLens"
          target="_blank"
          aria-label="link to github repository of website"
          className="text-4xl md:text-5xl hover:text-neutral-100 transition duration-300 hover:ease-in-out"
        >
          <ion-icon aria-hidden="true" name="logo-github"></ion-icon>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
