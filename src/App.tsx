import React from 'react';
<<<<<<< HEAD
// import logo from './logo.svg';
import './App.scss';
=======
import './App.scss';

import styled from 'styled-components'

import Index from "./index/Main/Index"

>>>>>>> new

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