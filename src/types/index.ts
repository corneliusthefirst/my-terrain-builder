export enum Tile {
    Grass = "Grass",
    Water = "Water",
    Rock = "Rock",
    House = "House",
}

export type GridElement = "Grass" | "Water" | "Rock" | "House";

export interface HistoryItem {
    grid: GridElement[];
    credit: number;
    message: string;
    tileIndex: number;
  }
  
  export interface CurrentTile {
    tileIndex: number;
    type: GridElement;
    creditChange: string | null;
  }
  

export interface GridState {
  grid: GridElement[];
  credit: number;
  selectedElement: GridElement | null;
  history: HistoryItem[];
  historyCurrentIndex: number;
  isViewingHistory: boolean;
  currentTile: CurrentTile | null;
  errorMessage: string | null
}

export interface PlaceBlock {
    tileIndex: number;
    gridElement: GridElement;
}


export interface SetCurrentTile {
    tileIndex: number;
    type: GridElement
}