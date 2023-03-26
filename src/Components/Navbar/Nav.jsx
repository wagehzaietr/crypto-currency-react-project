import React from "react";
import { Header, NavList, Lists, List } from "./Navbar.styled";
const Nav = () => {
  return (
    <>
      <Header>
            <img src='./logo.png' alt="" width='150px' />
            <input type="text" placeholder="seacrh" />
      </Header>
    </>
  );
};

export default Nav;
