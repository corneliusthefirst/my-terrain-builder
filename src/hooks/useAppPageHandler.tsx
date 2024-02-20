import { useMemo } from "react"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"
import { tileBackgroundHexBolors } from "../utils/helpers"
import { selectCurrentTile, selectIsDragging, selectUseDragAndDrop } from "../store/selectors"
import { DragItem, TileLabel } from "../types"
import {
  removeBlockAndUpdateHistoryAsync,
  toogleSwitch,
} from "../store/slices/gridSlice"

export const useAppPageHandler = () => {
  const dispatch = useAppDispatch()
  const currentTile = useAppSelector(selectCurrentTile)
  const useDragAndDrop = useAppSelector(selectUseDragAndDrop)
  const isDragging = useAppSelector(selectIsDragging)
  const tileBackgroundColor = useMemo(
    () => (currentTile ? tileBackgroundHexBolors[currentTile.label] : ""),
    [currentTile]
  )
  const canRemove = useMemo(
    () =>
      currentTile?.label !== TileLabel.Grass &&
      currentTile?.label !== TileLabel.Water,
    [currentTile]
  )
  const handleDrop = (item: DragItem) => {
    dispatch(removeBlockAndUpdateHistoryAsync(item.tileIndex))
  }

  const handleToogleSwitch = () => {
    dispatch(toogleSwitch())
  }

  return {
    handleDrop,
    canRemove,
    tileBackgroundColor,
    currentTile,
    useDragAndDrop,
    toogleSwitch: handleToogleSwitch,
    isDragging
  }
}
