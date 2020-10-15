import React from 'react';

const Header = ({ title }) => {
  return(
    <header style={{textAlign: "center", backgroundColor: "#efb6b2", marginTop: '90px'}}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;