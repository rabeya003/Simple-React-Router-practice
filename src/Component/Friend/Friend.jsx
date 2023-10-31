import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, id, email, phone } = friend || {};
  return (
    <div className="bg-blue-200 w-60 h-30 p-2 m-4 text-1xl">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/friend/${id}`}>Show Details</Link>
    </div>
  );
};

export default Friend;
