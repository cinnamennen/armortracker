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
import {
  initStore as initSettingsStore,
  selectSettings,
  toggleCompact,
  toggleDense,
} from "@/store/slices/settings"
import { RootState, useAppDispatch, useAppSelector } from "@/store/store"
import copy from "copy-to-clipboard"

export function useExport() {
  const armor = useAppSelector(selectArmor)
  const items = useAppSelector(selectItems)
  const settings = useAppSelector(selectSettings)
  return useCallback(() => {
    copy(btoa(JSON.stringify({ armor, items, settings })), {
      format: "text/plain",
    })
  }, [armor, items, settings])
}

export function useInitState() {
  const dispatch = useAppDispatch()

  return useCallback(
    (state: RootState) => {
      const { armor, items, settings } = state
      dispatch(initArmorStore(armor))
      dispatch(initItemStore(items))
      dispatch(initSettingsStore(settings))
    },
    [dispatch]
  )
}

export function useImport() {
  const initState = useInitState()
  return useCallback(() => {
    // log the users clipboard to the console
    navigator.clipboard.readText().then((clipText) => {
      const state = JSON.parse(atob(clipText))
      initState(state)
    })
  }, [initState])
}

export function useClear() {
  const dispatch = useAppDispatch()

  return useCallback(() => {
    dispatch(clearArmor())
    dispatch(clearItems())
  }, [dispatch])
}

export function useCompact() {
  const dispatch = useAppDispatch()
  return useCallback(() => {
    dispatch(toggleCompact())
  }, [dispatch])
}

export function useDense() {
  const dispatch = useAppDispatch()
  return useCallback(() => {
    dispatch(toggleDense())
  }, [dispatch])
}
