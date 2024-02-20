export enum TileLabel {
    Grass = "Grass",
    Water = "Water",
    Rock = "Rock",
    House = "House",
}

export interface Tile {
    label: TileLabel;
    active: boolean;
}

export interface HistoryItem {
    grid: Tile[];
    credit: number;
    message: string;
    tileIndex: number;
  }
  
  export interface CurrentTile {
    tileIndex: number;
    label: TileLabel;
    creditChange: string | null;
  }
  

export interface GridState {
  grid: Tile[];
  initialGrid: Tile[] | null;
  credit: number;
  selectedElement: TileLabel | null;
  history: HistoryItem[];
  historyCurrentIndex: number;
  isViewingHistory: boolean;
  currentTile: CurrentTile | null;
}

export interface PlaceBlock {
    tileIndex: number;
    gridElement: Tile;
}


export interface SetCurrentTile {
    tileIndex: number;
    gridElement: Tile;
}