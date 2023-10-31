import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
const Friends = () => {
  const friends = useLoaderData();

  return (
    <div>
      <h3 className="text-center my-4 mx-8 bg-cyan-300 w-50  h-28 p-8 ">
        All of my friends name is herethese are my Friend: {friends.length}
      </h3>
      <div className="grid md:grid-cols-3 gap-7">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
