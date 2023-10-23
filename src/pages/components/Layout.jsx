import React from "react";
import { Navbar } from "./Navbar";

const Header = () => {
  return <Navbar />;
};

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
