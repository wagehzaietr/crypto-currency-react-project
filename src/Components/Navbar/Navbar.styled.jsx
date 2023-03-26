import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input{
    border: none;
    outline: none;
    width: 18rem;
    height: 2rem;
    padding: 1rem 1rem;
    border-radius: 2rem;
    box-shadow: 0 0 15px 0 #00000058;
    margin: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavList = styled.nav``;

export const Lists = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const List = styled.li``;
