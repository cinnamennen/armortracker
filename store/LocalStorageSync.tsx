import { ReactNode, useEffect } from "react"
import {
  initStore as initArmorStore,
  initialState as initialArmorState,
} from "@/store/slices/armor"
import {
  initStore as initItemStore,
  initialState as initialItemState,
} from "@/store/slices/items"
import { useAppDispatch } from "@/store/store"

export function LocalStorageSync({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const reduxStorage = JSON.parse(localStorage.getItem("reduxState") ?? "{}")
    const a = reduxStorage["armor"]
    const b = reduxStorage["items"]
    a && dispatch(initArmorStore(a))
    b && dispatch(initItemStore(b))
  }, [dispatch])
  return <>{children}</>
}
