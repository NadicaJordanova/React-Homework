import { useEffect, useState } from "react";
import "../Exercise2/RandomUserFetcher.css"

function RandomUserFetcher() {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  function getRandomInt() {
    return Math.floor(Math.random() * 10 + 1);
  }
  function setUserIdToRandom() {
    setUserId(getRandomInt());
  }

  console.log(userId);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  console.log(user);

  return (
    <div className="userCard">
      <button onClick={setUserIdToRandom}>Get random user</button>
      <div className="user">

      {user ? (
        <div>
          <h1>{user?.name}</h1>
          <h3>{user?.address?.city}</h3>
          <p>{user?.phone}</p>
          <p>{user?.company?.name}</p>
        </div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
}

export default RandomUserFetcher;
