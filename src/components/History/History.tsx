import React from "react"
import Accordion from "../Accordion"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectCurrentHistoryIndex, selectHistory } from "../../store/selectors"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { updateGridFromHistory } from "../../store/slices/gridSlice"
import { HistoryItem } from "../../types"

export const History = () => {
  const currentHistoryIndex = useAppSelector(selectCurrentHistoryIndex)
  const historyList: HistoryItem[] = useAppSelector(selectHistory)
  const dispatch = useAppDispatch()

  const handleHistoryItemClick = (index: number) => {
    const history = historyList[index]
    dispatch(updateGridFromHistory(history))
  }

  return (
    <Accordion title="History" length={history.length}>
        <ul className={`space-y-2 animate-slideIn lg:text-left 2xs:text-center`}>
          {historyList?.map((history, index) => {
            const active = index === currentHistoryIndex

            return (
              <li
                key={history.message.replace(/\s+/g, "-")+index}
                className={`text-purple-700 text-sm p-2 cursor-pointer rounded ${
                  active ? "bg-gradient-to-r from-blue-100 via-gray-300 to-orange-200" : "hover:bg-gray-100"
                }`}
                onClick={() => handleHistoryItemClick(index)}
              >
                Action {index + 1}: {history.message}
              </li>
            )
          })}
        </ul>
    </Accordion>
  )
}
