"use client"

import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

const AppContext = createContext([{}])

export const AppWrapper = ({ children }: PropsWithChildren) => {
  const [appState, setAppState] = useState({})
  const contextValue = useMemo(() => {
    return [appState, setAppState]
  }, [appState, setAppState])

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
