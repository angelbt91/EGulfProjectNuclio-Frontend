import React from "react";
import { useEffect, useState } from "react";

export const useAuctions = (userId) => {
  const url = "http://localhost:5001/auctions";
  const userUrl = `http://localhost:5001/auctions/user/${userId}`;
  const [auctions, setAuctions] = useState(undefined);
  const [refreshAuctions, setRefreshAuctions] = useState(false);

  const handleRefresh = () => {
    setRefreshAuctions(!refreshAuctions);
  };

  useEffect(() => {
    fetch(userId ? userUrl : url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) => {
        let auctionUser = data;
        setAuctions(auctionUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [refreshAuctions]);

  return { auctions, handleRefresh };
};
