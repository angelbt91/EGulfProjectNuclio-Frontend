import "./mainpage.css";
import TabHeader from "../../components/tabheader/tabheader";
//import TabSubHeader from "../../components/tabsubheader/tabsubheader";
import AdBanner from "../../components/adbanner/adbanner";
import Roll from "../../components/roll/roll";
import { API_ROOT } from "../../utils/apiHost/apiHost";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}users/userId`, {
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
        setUserId(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <TabHeader />
      <hr className="_separatorLine2" size="1" width="99.9%" color="#D9D9D9" />
      <AdBanner />
      <Roll userIdNumber={userId} title="Articulos más visitados" />
      <Roll userIdNumber={userId} title="Televisores" />
    </div>
  );
};

export default MainPage;
