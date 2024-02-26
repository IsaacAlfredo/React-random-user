import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { UserCard } from "./components/UserCard/UserCard";

function App() {
  const [userCardInfo, setUserCardInfo] = useState({
    name: "",
    mail: "",
    picture: "",
    id: "",
  });
  const [userCardList, setUserCardList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userAPI = await axios.get("https://randomuser.me/api/");
        const userData = userAPI.data.results[0];
        setUserCardInfo({
          name: userData.name.first,
          mail: userData.email,
          picture: userData.picture.large,
          id: userData.id.value,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [userCardList]);

  function addCard() {
    setUserCardList((prevCards) => [...prevCards, userCardInfo]);
  }

  return (
    <>
      <Header title="Get Random User" />
      <Button text="Add User" onClick={addCard} />
      <div className="userCardsContainer">
        {userCardList.map((userCard) => (
          <UserCard
            name={userCard.name}
            mail={userCard.mail}
            picture={userCard.picture}
            key={userCard.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
