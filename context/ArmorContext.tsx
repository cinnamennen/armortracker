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
  ArmorActions,
  ArmorActionsMap,
  ArmorReducer,
  ArmorState,
} from "@/context/ArmorReducer"

import { Level } from "@/types/data"

export type ArmorDispatcher = <
  Type extends ArmorActions["type"],
  Payload extends ArmorActionsMap[Type]
>(
  type: Type,
  // This line makes it so if there shouldn't be a payload then
  // you only need to call the function with the type, but if
  // there should be a payload then you need the second argument.
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void
const initialState = {} satisfies ArmorState
export type ArmorContextInterface = readonly [ArmorState, ArmorDispatcher]
export const ArmorContext = createContext<ArmorContextInterface>([{}, () => {}])

export const ArmorWrapper = ({ children }: PropsWithChildren) => {
  const [state, _dispatch] = useReducer(ArmorReducer, initialState)

  const dispatch: ArmorDispatcher = useCallback((type, ...payload) => {
    _dispatch({ type, payload: payload[0] } as ArmorActions)
  }, [])

  useEffect(() => {
    const localArmor = localStorage.getItem("armor")
    if (!localArmor) return
    const parseArmor = JSON.parse(localArmor)
    if (!parseArmor) return
    //checking if there already is a state in localstorage
    //if yes, update the current state with the stored one
    dispatch("init_store", parseArmor)
  }, [dispatch])

  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("armor", JSON.stringify(state))
    }
  }, [state])

  return (
    <ArmorContext.Provider value={[state, dispatch]}>
      {children}
    </ArmorContext.Provider>
  )
}

export function useArmor(armorName: string) {
  const [allArmor, dispatch] = useContext(ArmorContext)
  const setArmor = useCallback(
    (armor: string, level: number) => dispatch("set_armor", { armor, level }),
    [dispatch]
  )

  return { value: allArmor[armorName] ?? Level.Ignored, set: setArmor }
}

export function useAllArmor() {
  const [allArmor, dispatch] = useContext(ArmorContext)
  return allArmor
}
