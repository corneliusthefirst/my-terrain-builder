import React from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { initializeGrid, resetStore } from "../../store/slices/gridSlice"

export const ResetButton = () => {
  const dispatch = useAppDispatch()

  const reset = () => {
    dispatch(resetStore())
    dispatch(initializeGrid())
  }

  return (
    <div
      onClick={reset}
      className={`flex justify-center cursor-pointer  bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400
      text-white font-bold  p-0.5 rounded-xl
   `}
    >
     <div className="flex justify-center items-center app-background px-4 py-2 rounded-xl">      <p className="text-purple-800 text-xs">Reset</p></div>
    </div>
  )
}
