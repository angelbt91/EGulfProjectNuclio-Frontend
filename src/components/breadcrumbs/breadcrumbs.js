import { React, useEffect, useState } from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter, useParams } from "react-router-dom";
import { routeNames } from "./breadcrumbs.constants";
import { API_ROOT } from "../../utils/apiHost/apiHost";

const Breadcrumbs = (props) => {
  const { history, location } = props;
  const { id } = useParams();
  const [product, setProduct] = useState();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const isProductPage =
    pathnames.some((path) => path === "product" || path === "productpage") &&
    pathnames.length > 1;
  console.log(location);
  console.log(pathnames);
  console.log(product);
  console.log(id);
  useEffect(() => {
    fetch(`${API_ROOT}auctions/${id}`)
      .then((response) => {
        if (response.status != 200) {
          throw "Product couldn't be found. Check the id!";
        }
        return response.json();
      })
      .then((json) => setProduct(json))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  //una variable de useState para crear un fetch a la base de datos y con el id de generic product buscar el producto
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" className="breadcrumbsPosition">
      {pathnames.length > 0 ? (
        <Link color="inherit" onClick={() => history.push("/")}>
          Home
        </Link>
      ) : null}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNames.find((route) => route.name === name);

        return isLast ? (
          <Typography key={name}>
            {" "}
            {isProductPage && product
              ? product.productId.name
              : displayName?.label || name}{" "}
          </Typography>
        ) : (
          <Link
            key={name}
            color="inherit"
            onClick={() => history.push(routeTo)}
          >
            {displayName?.label || name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
