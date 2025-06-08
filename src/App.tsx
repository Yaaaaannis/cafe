import './App.css'
import Header from './Header'
import Opening from './Opening'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import What from './What'
import SignatureMenu from './SignatureMenu'
import MatchaMenu from './MatchaMenu'
import ArtisanalMenu from './ArtisanalMenu'
import Merch from './Merch'
import DuoImages from './DuoImages'
import MerchShowcase from './MerchShowcase'
import WhatVideo from './WhatVideo'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/what" element={
          <>
            <What />
            <SignatureMenu />
            <MatchaMenu />
            <ArtisanalMenu />
          </>
        } />
        <Route path="/merch" element={
          <>
            <Merch />
            <DuoImages />
            <MerchShowcase />
          </>
        } />
        <Route path="/who" element={<WhatVideo />} />
      </Routes>
    </Router>
  )
}

export default App
