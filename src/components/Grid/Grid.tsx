import React, { useEffect } from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectActiveGrid } from "../../store/selectors"
import { initializeGrid } from "../../store/slices/gridSlice"
import GridItem from "./GridItem"
import { Tile } from "../../types"



export const Grid: React.FC = () => {
  const dispatch = useAppDispatch()
  const grid: Tile[] = useAppSelector(selectActiveGrid) || []

  useEffect(() => {
    dispatch(initializeGrid())
  }, [])

  return (
    <div className="w-full mt-8 animate-fadeIn">
      <div
        className="bg-green-100 grid grid-cols-10 gap-2 md:gap-1 shadow-lg  rounded"
        role="grid"
      >
        {grid.map((tile, index) => {
          return (
            <GridItem
              key={`${tile.label}-${index}`}
              label={tile.label}
              tileIndex={index}
              tile={tile}
            />
          )
        })}
      </div>
    </div>
  )
}

