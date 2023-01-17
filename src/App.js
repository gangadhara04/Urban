//! UI Creation using Composite Composition from(Components)

import React from 'react'
import Navbar from './ComponentsComposition/Header/Navbar';
import Main from './ComponentsComposition/Main/Main';
import Footer from './ComponentsComposition/Footer/Footer';

const App = () => {
  return (
    <div id="navBlock"><Navbar/><Main/><Footer/></div>
  )
}

export default App