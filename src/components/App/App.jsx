import { useState } from 'react'
import './App.css'
import PersonCard from '../PersonCard/PersonCard'


function App() {
  return (
    <div className="personCard">
      <PersonCard firstname="Jane" lastname="Doe" age="45" haircolor="Black" />
      <PersonCard firstname="Smith" lastname="John" age="88" haircolor="Brown" />
    </div>

  )
}

export default App
