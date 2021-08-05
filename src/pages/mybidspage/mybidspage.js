import React from "react";
import MyBids from "../../components/mybids/mybids";
import NoAuthorized from "../../components/noauthorized/noauthorized";



function MyBidsPage() {

  if (!localStorage.token) {
    return(
      <NoAuthorized />
    )
  }
  return (
    <div>
      <MyBids />
    </div>
  );
}

export default MyBidsPage;
