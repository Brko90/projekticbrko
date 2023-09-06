import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import brko from './Header'
import { SrednjiDio, GornjiDio, DonjiDio } from './Ostatak'

function App() {
  return (
    <><h1>{brko}</h1>
    <SrednjiDio />
    <GornjiDio />
    <DonjiDio /></>
  );
}

export default App;
