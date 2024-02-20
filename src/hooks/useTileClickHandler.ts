import React, { useCallback } from "react"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { selectSelectedElement } from "../store/selectors"
import { placeBlockAndUpdateHistoryAsync, setCurrentTile } from "../store/slices/gridSlice"
import { Tile } from "../types"

export const useTileClickHandler = () => {
  const dispatch = useAppDispatch()
  const selectedElement = useAppSelector(selectSelectedElement)

  const handleTileClick = useCallback(
    (tileIndex: number, gridElement: Tile) => {
      if (!gridElement.active) {
        if (selectedElement) {
          dispatch(
            placeBlockAndUpdateHistoryAsync({
              tileIndex,
              gridElement: { ...gridElement, label: selectedElement },
            })
          )
        }
      } else {
        dispatch(setCurrentTile({ tileIndex, gridElement }))
      }
    },
    [selectedElement]
  )

  return { handleTileClick }
}
