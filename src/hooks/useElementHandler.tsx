import React, { useEffect } from "react"
import { useAppSelector } from "./useAppSelector"
import { selectUseDragAndDrop } from "../store/selectors"
import { useDrag } from "react-dnd"
import { DragElement, DragItemTypes, TileLabel } from "../types"
import { useAppDispatch } from "./useAppDispatch"
import { setIsDraggingElement, setSelectedElement } from "../store/slices/gridSlice"

export const useElementHandler = (label: TileLabel) => {
  const dispatch = useAppDispatch()
  const useDragAndDrop = useAppSelector(selectUseDragAndDrop)
  const handleSelectElement = () => {
    dispatch(setSelectedElement(label))
  }

  const [{ isDragging }, drag] = useDrag({
    type: DragItemTypes.selectedElement,
    item: { label } as DragElement,
    canDrag: useDragAndDrop,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      }
    },
  })

  useEffect(() => {
    if (isDragging) {
    handleSelectElement()
      dispatch(setIsDraggingElement(true))
    } else {
      dispatch(setIsDraggingElement(false))
    }
  }
    , [isDragging])

  return { handleSelectElement, useDragAndDrop, dragElementRef: drag }
}
