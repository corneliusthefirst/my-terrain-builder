import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  GridState,
  HistoryItem,
  PlaceBlock,
  TileLabel,
  SetCurrentTile,
} from "../../types"
import { koalaToast } from "../../components/KoalaToast"
import {
  getPosition,
  initGrid,
  setCurrentTileHelper,
} from "../../utils/helpers"
import { AppDispatch, RootState } from ".."

const initialState: GridState = {
  grid: initGrid(),
  initialGrid: null,
  credit: 100,
  selectedElement: null,
  history: [],
  historyCurrentIndex: -1,
  isViewingHistory: false,
  currentTile: null,
}

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    initializeGrid: (state) => {
      // If the grid doesn't have a history, initialize it else keep the current persisted state
      if (state.history.length === 0) {
        const grid = state.grid.map((tile) => {
          const active = Math.random() < 0.05
          return {
            ...tile,
            label: active ? TileLabel.Rock : TileLabel.Grass,
            active,
          }
        })

        state.grid = grid
        state.initialGrid = grid
      }
    },

    updateGridFromHistory: (state, action: PayloadAction<HistoryItem>) => {
      const { grid, credit, tileIndex } = action.payload
      state.grid = grid
      state.credit = credit
      state.selectedElement = null
      state.currentTile = null

      if (tileIndex !== state.history.length - 1) {
        state.isViewingHistory = true // we shall use this to prevent certain actions when viewing history
      }

      return state
    },

    previousAction: (state) => {
      if (state.historyCurrentIndex > 0) {
        const { credit, grid } = state.history[state.historyCurrentIndex - 1]
        state.credit = credit
        state.grid = grid
      } else {
        state.credit = 100
        state.grid = state.initialGrid || initGrid()
      }
      state.currentTile = null
      state.historyCurrentIndex--
    },

    nextAction: (state) => {
      if (state.historyCurrentIndex < state.history.length - 1) {
        const { credit, grid } = state.history[state.historyCurrentIndex + 1]
        state.grid = grid
        state.credit = credit
        state.currentTile = null
        state.historyCurrentIndex++
      }
    },

    addToHistory: (state, action: PayloadAction<string>) => {
      const { history, historyCurrentIndex } = state

      // Check if current tileIndex is not the last tileIndex then remove all the future history
      if (historyCurrentIndex !== history.length - 1) {
        state.history = history.slice(0, historyCurrentIndex + 1)
      }

      const newHistory: HistoryItem = {
        grid: [...state.grid],
        credit: state.credit,
        message: action.payload,
        tileIndex: historyCurrentIndex,
      }

      state.history.push(newHistory)
      state.historyCurrentIndex++
    },

    setSelectedElement: (state, action: PayloadAction<TileLabel | null>) => {
      // If was viewing history, revert to the latest state before placing a new block
      if (state.isViewingHistory) {
        state.grid = state.history[state.history.length - 1].grid
        state.isViewingHistory = false
      }
      state.selectedElement = action.payload
      state.currentTile = null
    },

    setCurrentTile: (state, action: PayloadAction<SetCurrentTile>) => {
      const { tileIndex, gridElement } = action.payload
      state.currentTile = setCurrentTileHelper({
        tileIndex,
        gridElement,
      })
    },
    removeCurrentTile: (state) => {
      state.currentTile = null
    },

    placeBlock: (state, action: PayloadAction<PlaceBlock>) => {
      const { tileIndex, gridElement } = action.payload
      const cost = gridElement.label === TileLabel.House ? 10 : 3

      if (state.selectedElement === null) {
        koalaToast({
          message: "Please select an element Water, Rock or House to place.",
          type: "warning",
        })
        return
      }

      if (
        state.grid[tileIndex].label === TileLabel.Grass &&
        state.credit >= cost
      ) {
        state.grid[tileIndex].label = gridElement.label
        state.grid[tileIndex].active = true
        state.credit -= cost
      } else {
        koalaToast({
          message: "Not enough budget to place the block.",
          type: "danger",
        })
      }
      state.currentTile = setCurrentTileHelper({
        tileIndex,
        gridElement,
      })
    },

    removeBlock: (state, action: PayloadAction<number>) => {
      const tileIndex = action.payload
      const gridElement = state.grid[tileIndex]

      switch (gridElement.label) {
        case TileLabel.Water:
          if (state.credit <= 3) {
            koalaToast({
              message: "Cannot remove 'Water' block & Not enough budget.",
              type: "danger",
            })
            return
          }
          break
        case TileLabel.House:
          state.credit += 5
          break
        case TileLabel.Rock:
          if (state.credit < 3) {
            koalaToast({
              message: "Not enough budget to remove the block.",
              type: "danger",
            })
            return
          }
          state.credit -= 3
          break
        default:
          koalaToast({
            message: "Cannot remove 'Grass' block.",
            type: "warning",
          })
          return
      }

      state.grid[tileIndex].label = TileLabel.Grass
      state.grid[tileIndex].active = false
    },
  },
})

// Export the reducer and actions
export const {
  initializeGrid,
  updateGridFromHistory,
  setSelectedElement,
  setCurrentTile,
  placeBlock,
  removeBlock,
  addToHistory,
  previousAction,
  nextAction,
  removeCurrentTile,
} = gridSlice.actions

// Export Async action creators
export const removeBlockAndUpdateHistoryAsync =
  (index: number) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(removeBlock(index))
    const currentState = getState()
    const { label, creditChange } = currentState.currentTile!
    dispatch(
      addToHistory(
        `Removed ${label} at ${getPosition(index)}, credit: ${creditChange}`
      )
    )
    dispatch(removeCurrentTile())
  }

export const placeBlockAndUpdateHistoryAsync =
  (props: PlaceBlock) => async (dispatch: AppDispatch) => {
    const { gridElement, tileIndex } = props
    dispatch(placeBlock(props))
    dispatch(
      addToHistory(`Placed ${gridElement.label} at ${getPosition(tileIndex)}`)
    )
  }

export const gridReducer = gridSlice.reducer
