import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GridElement, GridState, HistoryItem, PlaceBlock,Tile, SetCurrentTile } from "../../types";
import { koalaToast } from "../../components/KoalaToast";
import { setCurrentTileHelper } from '../../utils/helpers';


const initialState: GridState = {
  grid: new Array(100).fill(Tile.Grass),
  credit: 100,
  selectedElement: null,
  history: [],
  historyCurrentIndex: -1,
  isViewingHistory: false,
  currentTile: null,
  errorMessage: null,
};

export const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    initializeGrid: (state) => {
      state.grid = Array.from({ length: state.grid.length }, () =>
        Math.random() < 0.05 ? Tile.Rock : Tile.Grass
      );
    },

    updateGridFromHistory: (
      state,
      action: PayloadAction<HistoryItem>
    ) => {
      const { grid, credit, tileIndex } = action.payload;
      state.grid = grid;
      state.credit = credit;
      state.selectedElement = null;
      state.currentTile = null;

      if(tileIndex !== state.history.length - 1){
        state.isViewingHistory = true; // we shall use this to prevent certain actions when viewing history
      }
    },

    previousAction: (state) => {
      if (state.historyCurrentIndex > 0) {
        const { credit, grid } = state.history[state.historyCurrentIndex - 1];
        state.credit = credit;
        state.grid = grid;
        state.currentTile = null;

        state.historyCurrentIndex--;
      }
    },

    nextAction: (state) => {
      if (state.historyCurrentIndex < state.history.length - 1) {
        const { credit, grid } = state.history[state.historyCurrentIndex + 1];
        state.grid = grid;
        state.credit = credit;
        state.currentTile = null;

        state.historyCurrentIndex++;
      }
    },


    addToHistory: (
      state,
      action: PayloadAction<string>
    ) => {
      const { history, historyCurrentIndex } = state;

      // Check if current tileIndex is not the last tileIndex then remove all the future history
      if (historyCurrentIndex !== history.length - 1) {
        state.history = history.slice(0, historyCurrentIndex + 1);
      }

      const newHistory: HistoryItem = {
        grid: [...state.grid],
        credit: state.credit,
        message: action.payload,
        tileIndex: historyCurrentIndex
      };

      state.history.push(newHistory);
      state.historyCurrentIndex++;
    },

    setSelectedElement: (
      state,
      action: PayloadAction<GridElement | null>
    ) => {
      // If was viewing history, revert to the latest state before placing a new block
      if(state.isViewingHistory) {
        state.grid = state.history[state.history.length - 1].grid
        state.isViewingHistory = false
      }
      state.selectedElement = action.payload;
    },

    setCurrentTile: (
      state,
      action: PayloadAction<SetCurrentTile>
    ) => {
      const { tileIndex, type } = action.payload;
      state.currentTile = setCurrentTileHelper({
        tileIndex,
        type
      })
    },

    placeBlock: (
      state,
      action: PayloadAction<PlaceBlock>
    ) => {
      const { tileIndex, gridElement } = action.payload;
      const cost = gridElement === Tile.House ? 10 : 3;

      if(state.selectedElement === null){
        koalaToast({
          message: "Please select an element Water, Rock or House to place.",
          type: "warning",
        });
        return;
      }

      if (state.grid[tileIndex] === Tile.Grass && state.credit >= cost) {
        state.grid[tileIndex] = gridElement;
        state.credit -= cost;
        state.currentTile = setCurrentTileHelper({
          tileIndex,
          type: gridElement
        })
      } else {
        koalaToast({
          message: "Not enough budget to place the block.",
          type: "danger",
        });
      }
    },

    removeBlock: (
      state,
      action: PayloadAction<number>
    ) => {
      const tileIndex  = action.payload;
      const gridElement = state.grid[tileIndex];

      switch (gridElement) {
        case Tile.Water:
          if (state.credit <= 3) {
            koalaToast({
              message: "Cannot remove 'Water' block & Not enough budget.",
              type: "danger",
            });
            return;
          }
          break;
        case Tile.House:
          state.credit += 5;
          break;
        case Tile.Rock:
          if (state.credit < 3) {
            koalaToast({
              message: "Not enough budget to remove the block.",
              type: "danger",
            });
            return;
          }
          state.credit -= 3;
          break;
        default:
          koalaToast({
            message: "Cannot remove 'Grass' block.",
            type: "warning",
          });
          return;
      }

      state.grid[tileIndex] = Tile.Grass;
      state.currentTile = null;
    },
  },
});



// Export the reducer and actions
export const {
  initializeGrid,
  updateGridFromHistory,
  setSelectedElement,
  placeBlock,
  removeBlock,
  addToHistory,
  previousAction
} = gridSlice.actions;

export const gridReducer = gridSlice.reducer;
