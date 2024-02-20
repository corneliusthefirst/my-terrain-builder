import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectCurrentTile } from "../../store/selectors"
import { getPosition, tileBackground } from "../../utils/helpers"
import { CurrentTile, TileLabel } from "../../types"
import NotPermittedIcon from "../Icons/not-permitted-icon"
import { removeBlockAndUpdateHistoryAsync } from "../../store/slices/gridSlice"

export const CurrentTileBlock: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentTile = useAppSelector(selectCurrentTile)
  const [display, setDisplay] = useState("hidden")
  const tileBackgroundColor = useMemo(
    () => (currentTile ? tileBackground[currentTile.label] : ""),
    [currentTile]
  )
  const canRemove = useMemo(
    () =>
      currentTile?.label !== TileLabel.Grass && currentTile?.label !== TileLabel.Water,
    [currentTile]
  )

  const handleRemoveClick = useCallback(() => {
    if (currentTile) {
      dispatch(removeBlockAndUpdateHistoryAsync(currentTile.tileIndex))
    }
  }, [currentTile])

  // hide the component using display when there is no selected tile
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!currentTile) {
        setDisplay("hidden")
      } else {
        setDisplay("block")
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [currentTile])



  return (

      <div
        className={`${display} ${
          currentTile
            ? "animate-slide-in"
            : "animate-slide-out"
        } bg-gradient-to-r from-gray-100 via-purple-100 to-purple-300  rounded-lg shadow-md py-4 text-center  mb-4`}
      >
        <div className="mb-3">
          <h2 className="font-semibold bg-gradient-to-r from-purple-500 to-green-500 inline-block text-transparent bg-clip-text text-xl mb-3">
            Current Tile
          </h2>
          <div className="flex flex-row mb-3 justify-center items-center">
            <div
              className={`h-12 w-12 ${tileBackgroundColor} rounded-sm`}
            ></div>
            <div>
              <p className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text ml-4">
                {currentTile?.label} (position:{" "}
                {currentTile?.tileIndex && getPosition(currentTile.tileIndex)})
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center items-center">
          <p className="font-semibold mr-2 text-purple-800">Action:</p>
          {canRemove ? (
            <button
              onClick={handleRemoveClick}
              className="bg-gradient-to-r from-red-400 to-red-600 text-sm text-white py-1 px-3 rounded-full hover:from-red-500 hover:to-red-700 transition-colors duration-300"
            >
              Remove ({currentTile?.creditChange} credit)
            </button>
          ) : (
            <NotPermittedIcon />
          )}
        </div>
      </div>
  )
}
