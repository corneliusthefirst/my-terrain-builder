import React from "react"
import BackIcon from "../../icons/back-icon"
import { nextAction, previousAction } from "../../store/slices/gridSlice"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import ForwardIcon from "../../icons/forward-icon"

export const UndoRedoBlock = () => {
  const dispatch = useAppDispatch()

  const handleUndo = () => {
    dispatch(previousAction())
  }

  const handleRedo = () => {
    dispatch(nextAction())
  }

  return (
    <div className="flex flex-row">
      <div className="cursor-pointer hover:opacity-50 hover:scale-125 transition-transform">
        <BackIcon onClick={handleUndo} />
      </div>

      <div
        className="cursor-pointer ml-3 hover:opacity-50 hover:scale-125 transition-transform"
      >
        <ForwardIcon onClick={handleRedo} />
      </div>
    </div>
  )
}
