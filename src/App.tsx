import React from 'react'
import { History } from './components/History'
import { Grid } from './components/Grid'
import { Controls } from './components/Controls'
import { CurrentTileBlock } from './components/CurrentTileBlock'

const App = () => {
  return (
      <div className="flex flex-col lg:flex-row md:space-x-4 md:px-4">
       <div className="flex flex-col p-2 md:px-4  lg:w-96 mt-6">
        <CurrentTileBlock />
        <History />
       </div>
       <div className="flex flex-1 flex-col p-2 md:pl-4">
        <Controls />
        <Grid />
       </div>

      </div>
  )
}

export default App
