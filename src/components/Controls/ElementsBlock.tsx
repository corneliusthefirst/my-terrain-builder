import React from "react"
import { TileLabel } from "../../types"
import { getTileIcon } from "../../utils/helpers"
import { useElementHandler } from "../../hooks/useElementHandler"

interface ElementBlockProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: TileLabel
}

const ElementBlock: React.FC<ElementBlockProps> = ({ label, className }) => {
  const { handleSelectElement, useDragAndDrop, dragElementRef } =
    useElementHandler(label)
  return (
    <button
      ref={dragElementRef}
      className={`${className} bg-gradient flex items-center justify-center  py-3 px-4 md:py-5 md:px-5 lg:py-3 lg:px-4 rounded transition duration-200 shadow-md`}
      onClick={() => !useDragAndDrop && handleSelectElement()}
    >
      {getTileIcon(label)}
    </button>
  )
}

export const ElementsBlock = () => {
  return (
    <div className="my-4 px-8 md:my-5 lg:my-0 md:px-32 lg:px-0">
      <div className="flex justify-around items-center py-4">
        <ElementBlock
          className="water"
          label={TileLabel.Water}
        />

        <ElementBlock
          className="mx-2 rock lg:mx-8"
          label={TileLabel.Rock}
        />

        <ElementBlock
          className="house"
          label={TileLabel.House}
        />
      </div>
    </div>
  )
}
