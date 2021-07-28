import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);
  console.log("*****");
  console.log(pathnames);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" className="breadcrumbsPosition">
      {pathnames.length > 0 ? (
        <Link color="inherit" onClick={() => history.push("/")}>
          Home
        </Link>
      ) : (
        <Typography> Home </Typography>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.lenght - 1;
        return isLast ? (
          <Typography key={name}> {name} </Typography>
        ) : (
          <Link
            key={name}
            color="inherit"
            onClick={() => history.push(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
