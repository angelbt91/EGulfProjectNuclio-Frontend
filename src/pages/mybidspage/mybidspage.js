import React from "react";
import MyBids from "../../components/mybids/mybids";
import NoAuthorized from "../../components/noauthorized/noauthorized";


import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";

function MyBidsPage() {

  if (!localStorage.token) {
    return(
      <NoAuthorized />
    )
  }
  return (
    <div>
      {/* <Breadcrumbs /> */}
      <MyBids />
    </div>
  );
}

export default MyBidsPage;
