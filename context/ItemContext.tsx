"use client"

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react"
import {
  ItemActions,
  ItemActionsMap,
  ItemReducer,
  ItemState,
} from "@/context/ItemReducer"

export type ItemDispatcher = <
  Type extends ItemActions["type"],
  Payload extends ItemActionsMap[Type]
>(
  type: Type,
  // This line makes it so if there shouldn't be a payload then
  // you only need to call the function with the type, but if
  // there should be a payload then you need the second argument.
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void
const initialState = {} satisfies ItemState
export type ItemContextInterface = readonly [ItemState, ItemDispatcher]
export const ItemContext = createContext<ItemContextInterface>([{}, () => {}])

export const ItemWrapper = ({ children }: PropsWithChildren) => {
  const [state, _dispatch] = useReducer(ItemReducer, initialState)

  const dispatch: ItemDispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as ItemActions)
  }, [])

  useEffect(() => {
    const localItem = localStorage.getItem("item")
    if (!localItem) return
    const parseItem = JSON.parse(localItem)
    if (!parseItem) return
    //checking if there already is a state in localstorage
    //if yes, update the current state with the stored one
    dispatch("init_store", parseItem)
  }, [dispatch])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("item", JSON.stringify(state))
    }
  }, [state])

  return (
    <ItemContext.Provider value={[state, dispatch]}>
      {children}
    </ItemContext.Provider>
  )
}

export function useItem(itemName: string) {
  const [allItem, dispatch] = useContext(ItemContext)
  const setItem = useCallback(
    (item: string, level: number) => dispatch("set_item", { item, level }),
    [dispatch]
  )

  return { value: allItem[itemName] ?? 0, set: setItem }
}

export function useAllItems() {
  const [allItem, dispatch] = useContext(ItemContext)
  return allItem
}
