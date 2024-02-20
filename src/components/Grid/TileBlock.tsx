import React, { useMemo } from "react"
import { getTileIcon, tileBackground } from "../../utils/helpers"
import { TileLabel } from "../../types"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectCurrentTile } from "../../store/selectors"

interface TileBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  label: TileLabel
  tileIndex: number
}

const TileBlock: React.FC<TileBlockProps> = (props) => {
  const { label, tileIndex, ...rest } = props
  const currentTile = useAppSelector(selectCurrentTile)
  const active = useMemo(
    () => currentTile?.tileIndex === tileIndex,
    [currentTile, tileIndex]
  )

  return (
    <div
      className={` ${active ? "animate-pulse" : ""} max-h-12 md:max-h-24 bg-gray-200 border border-gray-400 px-4 flex justify-center items-center transition ease-in-out duration-100 flex flex-col  cursor-pointer ${tileBackground[label]} hover:bg-opacity-50`}
      {...rest}
    >
      <div className="flex justify-center items-center h-full">
        {getTileIcon(label)}
      </div>
    </div>
  )
}

export default TileBlock
