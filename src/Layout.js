import React from "react";
import CntNavbar from "./components/CntNavbar";
import CntNavbar2 from "./components2/CntNavbar2";

const Layout = (props) => {
  return (
    <>
      <CntNavbar />
      <CntNavbar2 />

      {props.children}
    </>
  );
};

export default Layout;
