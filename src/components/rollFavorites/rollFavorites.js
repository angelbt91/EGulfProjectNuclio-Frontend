import Card from "../card/card";
import "./rollFavorites.css";
import { useEffect, useState } from "react";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const RollFavorites = () => {
  const [favorites, setFavorites] = useState(undefined);
  const [refreshFavorites, setRefreshFavorites] = useState(false);

  useEffect(() => {
    const url = `${API_ROOT}users/me/favorites`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        setFavorites(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [refreshFavorites]);

  return (
    <div className="main_roll">
      <div className="card_roll">
        {favorites &&
          favorites.map((favorite) => (
            <Card
              img={favorite.images[0]}
              name={favorite.name}
              id={favorite._id}
              nameUser={favorite.owner.name}
              rating={favorite.owner.rating}
              refreshFavorites={() => setRefreshFavorites(!refreshFavorites)}
              usersFavs={true}
            />
          ))}
      </div>
    </div>
  );
};

export default RollFavorites;
