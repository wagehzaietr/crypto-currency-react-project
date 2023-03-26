import React from "react";
import { Header, NavList, Lists, List } from "./Navbar.styled";


const Nav = ({ setsearchword }) => {
  return (
    <>
      <Header>
        <img src="./logo.png" alt="" width="150px" />
        <input
          type="text"
          placeholder="seacrh"
          onChange={(event) => {
            setsearchword(event.target.value);
          }}
        />
      </Header>
    </>
  );
};

export default Nav;
