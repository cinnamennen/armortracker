"use client"

import { ReactNode } from "react"
import { LocalStorageSync } from "@/store/LocalStorageSync"
import { store } from "@/store/store"
import { Provider } from "react-redux"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <LocalStorageSync>{children}</LocalStorageSync>
    </Provider>
  )
}
