"use client"

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react"
import {
  ItemActions,
  ItemActionsMap,
  ItemReducer,
  ItemState,
} from "@/context/ItemReducer"
import { ingredientsData } from "@/data/ingredients"
import { useImmerReducer } from "use-immer"

import { Recipe } from "@/types/data"

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
export const initialState = Object.fromEntries(
  Object.keys(ingredientsData).map((k) => [k, 0])
) satisfies ItemState
export type ItemContextInterface = readonly [ItemState, ItemDispatcher]
export const ItemContext = createContext<ItemContextInterface>([{}, () => {}])

export const ItemWrapper = ({ children }: PropsWithChildren) => {
  const [state, _dispatch] = useImmerReducer(ItemReducer, initialState)

  const dispatch: ItemDispatcher = useCallback(
    (type, ...payload) => {
      _dispatch({ type, payload: payload[0] } as ItemActions)
    },
    [_dispatch]
  )

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

export function useItemContext() {
  const [value, dispatch] = useContext(ItemContext)
  const set = useCallback(
    (item: string, level: number) => dispatch("set_item", { item, level }),
    [dispatch]
  )
  const consume = useCallback(
    (recipe: Recipe) => {
      Object.entries(recipe).forEach(([item, amount]) =>
        dispatch("use_item", {
          item: ingredientsData[item].displayName,
          amount: amount ?? 0,
        })
      )
    },
    [dispatch]
  )
  const load = useCallback(
    (items: ItemState) => dispatch("init_store", items),
    [dispatch]
  )
  const clear = useCallback(
    () => dispatch("init_store", initialState),
    [dispatch]
  )
  return { value, dispatch, set, consume, load, clear }
}

export function useItem(itemName: string) {
  const { value, ...rest } = useItemContext()

  return { value: value[itemName] ?? 0, ...rest }
}
