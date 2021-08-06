import React from "react";
import RollFavorites from "../../components/rollFavorites/rollFavorites";
import TabHeader from "../../components/tabheader/tabheader";
// import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

function FavouritePage() {
  return (
    <div className="App">
      <TabHeader />
      {/* <Breadcrumbs /> */}
      <RollFavorites />
    </div>
  );
}

export default FavouritePage;
