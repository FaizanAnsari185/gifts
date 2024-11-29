"use client"
import React, { useState } from "react";

const page = () => {
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState("");
  const gifts = ["Chocolate", "Flowers", "Book", "Watch", "Perfume"];

  const addFriend = () => {
    if (friendName.trim() !== "") {
      setFriends([...friends, { name: friendName, gift: "" }]);
      setFriendName("");
    }
  };

  const giveGift = (index) => {
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    const updatedFriends = friends.map((friend, i) =>
      i === index ? { ...friend, gift: randomGift } : friend
    );
    setFriends(updatedFriends);
  };

  const shuffleGifts = () => {
    const updatedFriends = friends.map((friend) => ({
      ...friend,
      gift: gifts[Math.floor(Math.random() * gifts.length)],
    }));
    setFriends(updatedFriends);
  };

  const removeGifts = () => {
    const updatedFriends = friends.map((friend) => ({ ...friend, gift: "" }));
    setFriends(updatedFriends);
  };

  const removeFriend = (index) => {
    const updatedFriends = friends.filter((_, i) => i !== index);
    setFriends(updatedFriends);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Friends List</h1>
      <div className="mb-3">
        <input
        className="border border-black"
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          placeholder="Enter friend's name"
        />
        <button onClick={addFriend} className="border border-black ml-3">
          Add Friend
        </button>
      </div>
      <ul>
        {friends.map((friend, index) => (
          <li key={index} className="mb-3">
            <span>
              {friend.name} {friend.gift && `- Gift: ${friend.gift}`}
            </span>
            <button 
              onClick={() => giveGift(index)}
               className="ml-3 border border-black"
            >
              Give Gift
            </button>
            <button
              onClick={shuffleGifts}
               className="ml-3 border border-black"
            >
              Shuffle Gifts
            </button>
            <button
              onClick={removeGifts}
               className="ml-3 border border-black"
            >
              Remove Gifts
            </button>
            <button
              onClick={() => removeFriend(index)}
               className="ml-3 border border-black"
            >
              Remove Friend
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
