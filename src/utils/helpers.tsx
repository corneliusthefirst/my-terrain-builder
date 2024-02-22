import { SetCurrentTile, Tile, TileLabel } from "../types"
import WaterIcon from "../icons/water-icon"
import RockIcon from "../icons/rock-icon"
import HouseIcon from "../icons/house-icon"
import GrassIcon from "../icons/grass-icon"

export const arrayTransform = {
  in: (array: any[]) => {
    return JSON.stringify(array);
  },
  out: (str: string) => {
    return JSON.parse(str);
  }
};

export const initGrid = () => {
  let grid: Tile[] = new Array(100).fill({
    label: TileLabel.Grass,
    active: false,
  }) as Tile[]
  return grid
}

export const setCurrentTileHelper = (props: SetCurrentTile) => {
  const { tileIndex, gridElement } = props
  let creditChange = null
  switch (gridElement.label) {
    case "House":
      creditChange = "+5"
      break
    case "Rock":
      creditChange = "-3"
      break
    default:
      break
  }
  return {
    tileIndex,
    label: gridElement.label,
    creditChange,
  }
}

export const getTileIcon = (type: TileLabel) => {
  switch (type) {
    case TileLabel.Water:
      return <WaterIcon />
    case TileLabel.Rock:
      return <RockIcon />
    case TileLabel.House:
      return <HouseIcon />
    default:
      return <GrassIcon />
  }
}

export const tileBackground = {
  [TileLabel.Water]: "bg-gradient water",
  [TileLabel.Rock]: "bg-gradient rock",
  [TileLabel.House]: "bg-gradient house",
  [TileLabel.Grass]: "bg-gradient grass",
}

export const tileBackgroundHexBolors = {
  [TileLabel.Water]: "#0998e0",
  [TileLabel.Rock]: "#5a626b",
  [TileLabel.House]: "#f09090",
  [TileLabel.Grass]: "#9AE6B4",

}

export const getPosition = (index: number) => {
  return `(${Math.floor(index / 10)}, ${index % 10})`
}
