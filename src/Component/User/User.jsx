import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const User = () => {
  const posts = useLoaderData();

  return (
    <div className="mx-4">
      <h2>Number of Posts: {posts.length}</h2>
      <div className="grid md:grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default User;
