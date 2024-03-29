import React from "react"
import "./index.css"
import { createRoot } from "react-dom/client"
import App from "./App"
import AppProvider from "./providers/app.provider"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <AppProvider>
      <App />
    </AppProvider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
