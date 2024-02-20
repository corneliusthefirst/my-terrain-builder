import React, { useCallback, useState } from "react"

interface SwitchProps {
  title: string
  onChange: (checked: boolean) => void
  checked: boolean
}

const Switch: React.FC<SwitchProps> = ({ onChange, checked, title }) => {
  const handleChange = () => {
    const newChecked = !checked
    onChange(newChecked)
  }

  return (
    <div className="flex flex-row justify-end">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleChange}
          checked={checked}
        />
        <div
          className={`relative w-11 h-6 bg-gray-200
        peer-focus:outline-none peer-focus:ring-3
        peer-focus:ring-blue-300 dark:peer-focus:ring-purple-500
        rounded-full peer dark:bg-purple-300
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
        peer-checked:bg-purple-500 peer-checked:after:border-white after:content-['']
        after:absolute after:top-[2px] after:start-[2px]
        after:bg-white after:border-gray-300 after:border
        after:rounded-full after:h-5 after:w-5 after:transition-all `}
        ></div>
        <span className="ms-3 text-sm font-medium text-gray-500">{title}</span>
      </label>
    </div>
  )
}

export default Switch
