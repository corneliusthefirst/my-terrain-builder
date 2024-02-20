import React from "react"
import { UndoRedoBlock } from "./UndoRedoBlock"
import { ElementsBlock } from "./ElementsBlock"
import { CreditBlock } from "./CreditBlock"

export const Controls = () => {
  return (
    <div className="flex w-full mt-4 flex-col lg:flex-row lg:justify-between lg:items-center lg:my-2">
      <div className="flex justify-between items-center lg:space-x-8">
          <CreditBlock />
        <UndoRedoBlock />
      </div>
      <ElementsBlock />
    </div>
  )
}
