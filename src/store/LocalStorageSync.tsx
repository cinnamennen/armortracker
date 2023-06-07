import { ReactNode, useEffect } from "react"

import { useInitState } from "@/lib/hooks"

export function LocalStorageSync({ children }: { children: ReactNode }) {
  const initState = useInitState()

  useEffect(() => {
    const reduxStorage = JSON.parse(localStorage.getItem("reduxState") ?? "{}")
    initState(reduxStorage)
  }, [initState])
  return <>{children}</>
}
