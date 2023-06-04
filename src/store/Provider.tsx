"use client"

import { ReactNode, useEffect } from "react"
import { LocalStorageSync } from "@/store/LocalStorageSync"
import { store, useAppDispatch } from "@/store/store"
import { Provider } from "react-redux"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <LocalStorageSync>{children}</LocalStorageSync>
    </Provider>
  )
}
