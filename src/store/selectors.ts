import { RootState } from "./index"

export const selectCurrentHistoryIndex = (state: RootState) =>
  state.grid.historyCurrentIndex
export const selectHistory = (state: RootState) => state.grid.history
export const selectCreditChange = (state: RootState) =>
  state.grid.currentTile?.creditChange
export const selectGrid = (state: RootState) => state.grid.grid
export const selectCredit = (state: RootState) => state.grid.credit
export const selectSelectedElement = (state: RootState) => state.grid.selectedElement
export const selectCurrentTile = (state: RootState) => state.grid.currentTile

