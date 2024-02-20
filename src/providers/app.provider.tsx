import React, { useMemo } from "react"
import { ToastContainer } from "react-toastify"
import Layout from "../components/Layout"
import { Provider } from "react-redux"
import { persistor, store } from "../store"
import { PersistGate } from 'redux-persist/integration/react'

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const toastStyle = useMemo(
    () => ({
      display: "flex",
      width: "auto",
    }),
    []
  )
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            {children}
            <ToastContainer
              position="top-center"
              style={toastStyle}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Layout>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}
