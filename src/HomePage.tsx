import { NavBar } from "./NavBar";
import React from "react";
import { ViewArticle } from "./Components/ViewArticle";
export function Homepage() {
  return (
    <React.Fragment>
      <NavBar />
      <ViewArticle />
    </React.Fragment>
  );
}
