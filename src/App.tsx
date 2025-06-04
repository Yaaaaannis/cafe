import './App.css'
import Header from './Header'
import Opening from './Opening'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import What from './What'
import SignatureMenu from './SignatureMenu'

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
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App
