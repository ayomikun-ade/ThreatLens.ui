import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="absolute font-primary text-xs md:text-sm bottom-0 py-1 px-3 left-0 right-0 mx-auto bg-[#f2f2f2] rounded-t-md w-fit text-center text-neutral-700">
      &#64;
      <Link
        to="https://www.github.com/ayomikun-ade"
        className="hover:underline transition duration-300 hover:ease-in-out"
        target="_blank"
      >
        ayomikun-ade
      </Link>{" "}
      All Rights Reserved &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Copyright;
