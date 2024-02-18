import React from 'react'
import {CurrentTile} from './components/CurrentTile'
import { History } from './components/History'
import { Grid } from './components/Grid'
import { Controls } from './components/Controls'

const App = () => {
  return (
      <div className="flex flex-col md:flex-row md:space-x-4">
       <div className="flex flex-col p-2 md:px-8">
        <CurrentTile />
        <History />
       </div>
       <div className="flex flex-1 flex-col p-2 md:px-8">
        <Controls />
        <Grid />
       </div>

      </div>
  )
}

export default App
