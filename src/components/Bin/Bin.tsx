import React from "react"
import { useDrop } from "react-dnd"
import { DragItem, DragItemTypes, TileLabel } from "../../types"
import BinIcon from "../../icons/bin-icon"
import MessageIcon from "../../icons/message-icon"
import NotPermittedIcon from "../../icons/not-permitted-icon"
import { getPosition } from "../../utils/helpers"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { removeCurrentTile } from "../../store/slices/gridSlice"
import { useAppPageHandler } from "../../hooks/useAppPageHandler"

interface BinProps {}

export const Bin: React.FC<BinProps> = ({}) => {
  const dispatch = useAppDispatch()
  const { handleDrop, canRemove, tileBackgroundColor, currentTile } =
    useAppPageHandler()
  const [{ isOver }, drop] = useDrop({
    accept: DragItemTypes.GridItem,
    drop: (item: DragItem) => {
      if (canRemove) {
        handleDrop(item)
      } else {
        dispatch(removeCurrentTile())
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  const message = () => {
    return (
      <div className={`flex flex-col justify-center items-center`}>
        <div>
          <p className="font-semibold  text-xl mb-2 bg-gradient-to-r  from-gray-100 to-green-400 inline-block text-transparent bg-clip-text">
            {currentTile?.label}
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg text-white">Position:</p>
          <p className="font-semibold text-xs text-white ml-2">
            <span>
              ({currentTile?.tileIndex && getPosition(currentTile.tileIndex)})
            </span>
          </p>
        </div>
        {currentTile?.creditChange ? (
          <div className="flex flex-row w-full justify-center items-center mt-2">
            <div
              className={`${currentTile.label === TileLabel.House ? "bg-gradient-to-r from-green-400  to-green-800" : "bg-gradient-to-r from-red-400  to-red-800"} flex justify-center items-center    text-sm text-white h-8 w-8 rounded-full `}
            >
              <p>{currentTile?.creditChange}</p>
            </div>
            <p className="ml-1 text-sm">credits</p>
          </div>
        ) : (
          <div className="mt-4" />
        )}
      </div>
    )
  }

  return (
    <div
      ref={drop}
      className={`fixed bottom-4 left-1/3 -translate-x-1/4 md:left-3/4 transform md:-translate-x-1/4 text-white py-2 px-4 rounded-full ${isOver ? `border-2 border-green-200 shadow` : ""}`}
    >
      <div className="text-white text-xs">
        <MessageIcon message={message} fill={tileBackgroundColor} />
      </div>
      <div className="flex flex-row justify-end  -mt-4 -mr-5">
        {canRemove ? <BinIcon /> : <NotPermittedIcon />}
      </div>
    </div>
  )
}
