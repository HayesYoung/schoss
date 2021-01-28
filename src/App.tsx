import React from 'react';
import './App.scss';

import styled from 'styled-components'

import Index from "./index/Main/Index"
// import { start } from 'repl';


function App() {
  return (
    <div className="App">

      <div className="y-bgc-index">
        <Index></Index>
      </div>

    </div>
  );
}

export default App;

const CssStyled = styled.div`
    position: relative;
`