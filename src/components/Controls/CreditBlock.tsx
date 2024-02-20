import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectCurrentCredit } from "../../store/selectors"

export const CreditBlock = () => {
  const credit = useAppSelector(selectCurrentCredit)
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    setAnimate(true)
    const timeout = setTimeout(() => {
      setAnimate(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [credit])

  return (
    
    <div className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold py-2 px-4 rounded-full 
     ${animate?'scale-125 transition-transform':''}`}>
      <p>Credit : {credit}</p>
    </div>
  )
}
