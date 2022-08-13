import "./GlobalStyle.scss";
import React from "react";

interface IGlobalStype {
  children: JSX.Element;
}

function GlobalStyle({ children }: IGlobalStype) {
  return children;
}

export default GlobalStyle;
