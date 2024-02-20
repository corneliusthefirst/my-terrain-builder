import React from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setSelectedElement } from "../../store/slices/gridSlice"
import { TileLabel } from "../../types"
import { getTileIcon } from "../../utils/helpers"

export const ElementsBlock = () => {
  const dispatch = useAppDispatch()
  const handleSelectElement = (element: TileLabel) => {
    dispatch(setSelectedElement(element))
  }

  return (
    <div className="my-4 md:my-6 lg:my-0 md:px-32 lg:px-0">
      <div className="flex justify-around items-center p-4">
        <button
          className="bg-gradient water flex items-center justify-center  py-2 px-6 rounded transition duration-200 shadow-md"
          onClick={() => handleSelectElement(TileLabel.Water)}
        >
          {getTileIcon(TileLabel.Water)}
        </button>

        <button
          className="bg-gradient mx-2 rock flex items-center justify-center py-2 px-6 rounded transition duration-200 shadow-md lg:mx-8"
          onClick={() => handleSelectElement(TileLabel.Rock)}
        >
          {getTileIcon(TileLabel.Rock)}
        </button>

        <button
          className="bg-gradient house flex items-center justify-center py-2 px-6 rounded transition duration-200 shadow-md"
          onClick={() => handleSelectElement(TileLabel.House)}
        >
          {getTileIcon(TileLabel.House)}
        </button>
      </div>
    </div>
  )
}
