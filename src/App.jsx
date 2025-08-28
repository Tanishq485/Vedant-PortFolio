import React from 'react'
import Hero from './Components/Hero'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App