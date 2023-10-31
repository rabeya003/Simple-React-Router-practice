import ActiveLink from "../ActiveLink/ActiveLink";
const Header = () => {
  return (
    <nav className="my-4 mx-4">
      <ActiveLink
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1  my-4 text-white"
        to="/"
      >
        Home
      </ActiveLink>
      <ActiveLink
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1 text-white"
        to="/friends"
      >
        Friends
      </ActiveLink>
      <ActiveLink
        className="bg-blue-400  hover:bg-blue-600 mx-2 p-1 text-white"
        to="/about"
      >
        About
      </ActiveLink>
      <ActiveLink
        className="bg-blue-400 mx-2 hover:bg-blue-600 p-1 text-white"
        to="/contact"
      >
        Contact
      </ActiveLink>
      <ActiveLink
        className="bg-blue-400 mx-2 hover:bg-blue-600 p-1 text-white"
        to="/post"
      >
        Posts
      </ActiveLink>
    </nav>
  );
};

export default Header;
