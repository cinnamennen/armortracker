import { useCallback } from "react"
import {
  clear as clearArmor,
  initStore as initArmorStore,
  selectArmor,
} from "@/store/slices/armor"
import {
  clear as clearItems,
  initStore as initItemStore,
  selectItems,
} from "@/store/slices/items"
import { useAppDispatch, useAppSelector } from "@/store/store"
import copy from "copy-to-clipboard"

export function useExport() {
  const armor = useAppSelector(selectArmor)
  const items = useAppSelector(selectItems)
  return useCallback(() => {
    copy(btoa(JSON.stringify({ armor, items })), {
      format: "text/plain",
    })
  }, [armor, items])
}

export function useImport() {
  const dispatch = useAppDispatch()
  return useCallback(() => {
    // log the users clipboard to the console
    navigator.clipboard.readText().then((clipText) => {
      const { armor, items } = JSON.parse(atob(clipText))
      dispatch(initArmorStore(armor))
      dispatch(initItemStore(items))
    })
  }, [dispatch])
}

export function useClear() {
  const dispatch = useAppDispatch()

  return useCallback(() => {
    dispatch(clearArmor())
    dispatch(clearItems())
  }, [dispatch])
}
