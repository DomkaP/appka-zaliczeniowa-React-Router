import React from 'react';
localStorage.setItem("Cena","1");
function Cena(props) {

  return (
    <span className="cena" >{(props.cena / 100).toFixed(2)}zł</span>
  );
}

export default Cena;
