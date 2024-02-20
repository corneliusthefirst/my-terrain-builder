import React from "react"
import { History } from "./components/History"
import { Grid } from "./components/Grid"
import { Controls } from "./components/Controls"
import { CurrentTileBlock } from "./components/CurrentTileBlock"
import { Bin } from "./components/Bin"
import { useAppPageHandler } from "./hooks/useAppPageHandler"
import Switch from "./components/Switch"
import { ResetButton } from "./components/Controls/ResetButton"

const App = () => {
  const { useDragAndDrop, toogleSwitch, isDragging } = useAppPageHandler()

  return (
    <div className="flex relative flex-col lg:flex-row md:space-x-4 md:px-4">
      <div className="flex flex-col p-2 md:px-4  lg:w-96 mt-6">
        {!useDragAndDrop && <CurrentTileBlock />}
        <div className="flex flex-row justify-between my-4">
          <ResetButton />
          <Switch
          title="use drag and drop"
          onChange={toogleSwitch}
          checked={useDragAndDrop}
        />
        </div>

        <History />
      </div>
      <div className="flex flex-1 flex-col p-2 md:pl-4">
        <Controls />
        <Grid />
      </div>
      {isDragging && (
        <div className="absolute w-full">
          <Bin />
        </div>
      )}
    </div>
  )
}

export default App
