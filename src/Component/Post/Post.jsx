import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post || {};
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="bg-blue-200 p-4">
      <h3 className="text-center font-bold">ID: {id}</h3>
      <h2 className="font-semibold">Title: {title}</h2>
      <p className="font-normal p-2">Body: {body}</p>
      <Link className="text-white p-4 m-2 bg-slate-400" to={`/post/${id}`}>
        Show Details
      </Link>
      <Link to={`/post/${id}`}>
        <button className="text-white p-4 m-2 bg-slate-500">
          Show Post Details
        </button>
        <button
          onClick={() => handleNavigation}
          className="text-white p-4 m-2 bg-slate-500"
        >
          With button Handler
        </button>
      </Link>
    </div>
  );
};

export default Post;
