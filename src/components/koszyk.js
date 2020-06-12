import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { CtxConsumer } from '../index';
import Cena from './cena';



function Koszyk(props) {

  const cofnij = () => {
    props.history.push('/');
  }

  return (
    <CtxConsumer>
      { context => (
        <div style={{padding: '50px'}}>
          <h1>Koszyk</h1>
          <h2><Cena cena={context.koszyk} /></h2>
          <button onClick={()=> cofnij()}>Wróć</button>
        </div>
      )}
        
    </CtxConsumer>
  );
}

export default withRouter(Koszyk);
