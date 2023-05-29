import { useCallback } from "react"
import { useArmorContext } from "@/context/ArmorContext"
import { useItemContext } from "@/context/ItemContext"
import copy from "copy-to-clipboard"

export function useExport() {
  const { value: armor } = useArmorContext()
  const { value: items } = useItemContext()
  return useCallback(() => {
    copy(btoa(JSON.stringify({ armor, items })), {
      format: "text/plain",
    })
  }, [armor, items])
}

export function useImport() {
  const { load: loadArmor } = useArmorContext()
  const { load: loadItems } = useItemContext()
  return useCallback(() => {
    // log the users clipboard to the console
    navigator.clipboard.readText().then((clipText) => {
      const { armor, items } = JSON.parse(atob(clipText))
      loadArmor(armor)
      loadItems(items)
    })
  }, [loadArmor, loadItems])
}

export function useClear() {
  const { clear: clearArmor } = useArmorContext()
  const { clear: clearItems } = useItemContext()
  return useCallback(() => {
    clearArmor()
    clearItems()
  }, [clearArmor, clearItems])
}
