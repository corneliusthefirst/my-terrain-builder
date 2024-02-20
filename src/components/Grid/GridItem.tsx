import React from "react"
import { getTileIcon, tileBackground } from "../../utils/helpers"
import { Tile, TileLabel } from "../../types"
import { useGridItemHandler } from "../../hooks/useGridItemHandler"

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: TileLabel
  tileIndex: number
  tile: Tile
}

const GridItem: React.FC<GridItemProps> = (props) => {
  const { label, tileIndex, tile, ...rest } = props
  const {
    isActive,
    dragRef,
    isDragging,
    handleTileClick,
    useDragAndDrop,
    dropRef,
  } = useGridItemHandler({ tileIndex, gridElement: tile })

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={` ${isActive ? "animate-pulse" : ""} ${isDragging ? "opacity-50 cursor-move" : ""} max-h-12 md:max-h-24 bg-gray-200 border border-gray-400 px-4 flex justify-center items-center transition ease-in-out duration-100 flex flex-col  cursor-pointer ${tileBackground[label]} hover:bg-opacity-50`}
      onClick={() => !useDragAndDrop && handleTileClick()}
      {...rest}
    >
      <div className="flex justify-center items-center h-full">
        {getTileIcon(label)}
      </div>
    </div>
  )
}

export default GridItem
