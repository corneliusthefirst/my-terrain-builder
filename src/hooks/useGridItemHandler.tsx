import React, { useCallback, useEffect, useMemo } from "react"
import { useAppSelector } from "./useAppSelector"
import {
  selectActiveGrid,
  selectCurrentTile,
  selectSelectedElement,
  selectUseDragAndDrop,
} from "../store/selectors"
import { useDrag, useDrop } from "react-dnd"
import { DragElement, DragItem, DragItemTypes, Tile } from "../types"
import { useAppDispatch } from "./useAppDispatch"
import {
  placeBlockAndUpdateHistoryAsync,
  setCurrentTile,
  setIsDragging,
  setSelectedElement,
} from "../store/slices/gridSlice"

interface UseGridItemHandlerProps {
  tileIndex: number
  gridElement: Tile
}

export const useGridItemHandler = ({
  tileIndex,
  gridElement,
}: UseGridItemHandlerProps) => {
  const dispatch = useAppDispatch()
  const grid = useAppSelector(selectActiveGrid)
  const currentTile = useAppSelector(selectCurrentTile)
  const useDragAndDrop = useAppSelector(selectUseDragAndDrop)
  const tile = grid[tileIndex]
  const isActive = useMemo(
    () => currentTile?.tileIndex === tileIndex,
    [currentTile, tileIndex]
  )

  const selectedElement = useAppSelector(selectSelectedElement)

  const handleTileClick = useCallback(() => {
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
  }, [selectedElement])

  // to handle drag and drop for grid items to view information about the current tile and delete if possible
  const [{ isDragging }, drag] = useDrag({
    type: DragItemTypes.GridItem,
    item: { tileIndex } as DragItem,
    canDrag: useDragAndDrop && tile.active,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  })

  useEffect(() => {
    if (isDragging) {
      dispatch(setCurrentTile({ tileIndex, gridElement: tile }))
      dispatch(setIsDragging(true))
    } else {
      dispatch(setIsDragging(false))
    }
  }, [isDragging])

  // to handle drag and drop of selected element to place it on the grid
  const [{ isOver }, drop] = useDrop({
    accept: DragItemTypes.selectedElement,
    drop: (item: DragElement) => {
      dispatch(
        placeBlockAndUpdateHistoryAsync({
          tileIndex,
          gridElement: { ...gridElement, label: item.label },
        })
      )
      // on drop, remove the selected element
      dispatch(setSelectedElement(null))
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return {
    isActive,
    dragRef: drag,
    isDragging,
    handleTileClick,
    useDragAndDrop,
    isOver,
    dropRef: drop,
  }
}
