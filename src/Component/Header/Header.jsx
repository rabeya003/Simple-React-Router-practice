import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="my-4 mx-4">
      <Link
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1  my-4 text-white"
        to="/"
      >
        Home
      </Link>
      <Link
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1 text-white"
        to="/friends"
      >
        Friends
      </Link>
      <Link
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1 text-white"
        to="/about"
      >
        About
      </Link>
      <Link
        className="bg-blue-400 mx-2 hover:bg-blue-600 p-1 text-white"
        to="/contact"
      >
        Contact
      </Link>
      <Link
        className="bg-blue-400 mx-2 hover:bg-blue-600 p-1 text-white"
        to="/post"
      >
        Posts
      </Link>
    </nav>
  );
};

export default Header;
