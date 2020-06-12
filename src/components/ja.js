import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { CtxConsumer } from '../index';




function Koszyk(props) {

  const cofnij = () => {
    props.history.push('/');
  }

  return (
    <CtxConsumer>
      { context => (
        <div style={{padding: '50px'}}>
          <h1>bład</h1>
          <h2>Dodaj poprawnie</h2>
          <button onClick={()=> cofnij()}>Wróć</button>
        </div>
      )}
        
    </CtxConsumer>
  );
}

export default withRouter(Koszyk);
