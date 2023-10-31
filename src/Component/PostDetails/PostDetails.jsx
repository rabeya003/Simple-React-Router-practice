import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, body, title } = post || {};
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="mx-6 my-4 p-4 bg-slate-300">
      <h2>
        Details about the post of: <span className="font-bold">{id}</span>
      </h2>
      <h5>Title: {title}</h5>
      <p>
        <small>Body: {body}</small>
      </p>
      <button
        className="text-white p-4 m-2 bg-slate-500"
        onClick={() => handleGoBack()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
