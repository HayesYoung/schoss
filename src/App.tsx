import React from 'react';
import './App.scss';
// import styled from 'styled-components'
import { renderRoutes } from 'react-router-config';
import routes from './router/index';

import PcNav from "./views/Nav/PcNav"



function App() {
  return (
    <div className="App">

      <PcNav></PcNav>

      {renderRoutes(routes)}

    </div>
  );
}

export default App;

// const CssStyled = styled.div`
//     position: relative;
//     width: 100%;
// `