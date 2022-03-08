/* eslint-disable no-unused-vars */
import React from 'react';
import { GlobalStyle, Conteiner } from './global';
import aliasTest from '@/alias/alias0';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <h1>hello world</h1>
        <aliasTest />
      </Conteiner>
    </>
  );
}

export default App;
