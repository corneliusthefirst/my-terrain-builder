import { RootState } from "./index"

export const selectCurrentHistoryIndex = (state: RootState) =>
  state.historyCurrentIndex
export const selectHistory = (state: RootState) => state.history
export const selectActiveGrid = (state: RootState) => state.grid
export const selectCurrentCredit = (state: RootState) => {
  return state.credit
}
export const selectSelectedElement = (state: RootState) => state.selectedElement
export const selectCurrentTile = (state: RootState) => state.currentTile
export const selectUseDragAndDrop = (state: RootState) => state.useDragAndDrop
export const selectIsDragging = (state: RootState) => state.isDragging
export const selectIsDraggingElement = (state: RootState) => state.isDraggingElement