import React from "react";
import { useEffect, useState } from "react";
import { API_ROOT } from "../utils/apiHost/apiHost";

export const useProducts = (userId) => {
  const url = `${API_ROOT}products`;
  const userUrl = `${API_ROOT}products/user/${userId}`;
  const [products, setProducts] = useState(undefined);
  const [refreshProducts, setRefreshProducts] = useState(false);

  const handleRefresh = () => {
    setRefreshProducts(!refreshProducts);
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
        let productUser = data;
        setProducts(productUser);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [refreshProducts]);

  return { products, handleRefresh };
};
