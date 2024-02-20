import React from "react"
import { Slide, toast, ToastTransition } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CheckIconOutline from "./Icons/checkicon-outline"
import ErrorIcon from "./Icons/error-icon"

interface koalaToastProps {
  message?: string
  type: "warning" | "success" | "danger" | "primary"
  color?: string
  background?: string
  activeText?: { message: string; textClick: () => void }
  transition?: ToastTransition | undefined
}

const toastIcon = {
  success: {
    icon: CheckIconOutline,
    color: "#27AE60",
  },
  danger: {
    icon: ErrorIcon,
    color: "#C85C54",
  },
  primary: {
    icon: CheckIconOutline,
    color: "#347AE2",
  },
  warning: {
    icon: CheckIconOutline,
    color: "#FDB92C",
  },
}

export const koalaToast = (props: koalaToastProps) => {
  const {
    message,
    type,
    background = "white",
    transition = Slide,
  } = props

  // close any previous opened toast
  toast.dismiss()

  toast(
    <p className={`whitespace-nowrap overflow-hidden overflow-ellipsis font-normal font-medium text-base font-inter ml-0`}>
    {message}{' '}
  </p>,
    {
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: true,
      autoClose: 1000,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
      icon: toastIcon[type].icon({ width: 20, height: 20 }),
      transition: transition || Slide,
      bodyStyle: {
        height: "50px",
        fontSize: "15px",
        fontWeight: "500",
        color: "black",
        fontFamily: "Inter",
        fontStyle: "normal",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        paddingRight: "16px",
        background: background,
        border: `1px solid ${toastIcon[type].color}`,
        boxShadow: "0px 4px 10px rgba(17, 19, 23, 0.25)",
        borderRadius: 4,
      },
      style: {
        background: "transparent",
        boxShadow: "none",
      },
    }
  )
  
}
