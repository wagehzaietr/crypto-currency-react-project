import React from 'react'
import CoinsApi from './CoinsApi'
import styled from 'styled-components'


const Cards = styled.div`
  width: 12rem;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.4s;

  &:hover {
    transform: translateY(-5px);
  }

  .img-top {
    padding: 2rem;
    transition: 0.5s;
    &:hover {
      transform: rotate(5deg);
    }
  }

  h3,
  p {
    margin-top: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
`;

const Coins = ({ name, icon, price }) => {
  return (
    <>
      <Cards className="card">
        <img src={icon} alt="" className="img-top" width="100%" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">price:{price}</p>
        </div>
      </Cards>
    </>
  );
};

export default Coins