/* eslint-disable no-unused-vars */
import React from 'react';
import { GlobalStyle, Conteiner } from './global';

import MyComponents from '@Components/MyComponents';
// import MyComponents from './Components/MyComponents';

import AliasTest from '@alias/alias0';
// import AliasTest from './Components/aliasTest/alias0';

import Nivel1 from '@alias1/alias1';
// import Nivel1 from './Components/aliasTest/nivel1/alias1';

import Nivel2 from '@alias2/alias2';
// import Nivel2 from './Components/aliasTest/nivel1/nivel2/alias2';

import Nivel3 from '@alias3/alias3';
// import Nivel3 from './Components/aliasTest/nivel1/nivel2/nivel3/alias3';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <h1>hello world</h1>
        <br />
        <MyComponents />
        <br />
        <AliasTest />
        <br />
        <Nivel1 />
        <br />
        <Nivel2 />
        <br />
        <Nivel3 />
      </Conteiner>
    </>
  );
}

export default App;
