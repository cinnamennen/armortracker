import { armor } from "@/data/armor"
import { RootState } from "@/store/store"
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"

// import { HYDRATE } from "next-redux-wrapper"
import { Level } from "@/types/data"

type ArmorData = { level: number; ignored: boolean }
export type ArmorState = Record<string, ArmorData>
const initialState: ArmorState = Object.fromEntries(
  armor.map((a) => [a.displayName, { level: Level.Base, ignored: false }])
)
export const armorSlice = createSlice({
  name: "armor",
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ armor: string; level: number }>) {
      const stateElement = state[action.payload.armor]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level = action.payload.level
    },
    upgrade(state, action: PayloadAction<string>) {
      const stateElement = state[action.payload]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level += 1
      stateElement.level = Math.min(stateElement.level, Level.Four)
    },
    toggleIgnore(state, action: PayloadAction<string>) {
      const stateElement = state[action.payload]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.ignored = !stateElement.ignored
    },
    initStore(
      state,
      action: PayloadAction<ArmorState | Record<string, number>>
    ) {
      for (const key in action.payload) {
        const payloadElement = action.payload[key]
        if (payloadElement === undefined) continue
        if (typeof payloadElement === "number") {
          state[key] = { level: payloadElement, ignored: false }
        } else {
          state[key] = payloadElement
        }
      }
    },
    clear(state) {
      state = initialState
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     console.log("HYDRATE", state, action.payload)
  //     return {
  //       ...state,
  //       ...action.payload.armor,
  //     }
  //   },
  // },
})

export const { clear, set, upgrade, toggleIgnore, initStore } =
  armorSlice.actions
export const selectArmor = (state: RootState) => state.armor
export default armorSlice.reducer

export const selectArmorByName = createSelector(
  [selectArmor, (_, name: string) => name],
  // Output selector gets (`items, category)` as args
  (armor, category) => armor[category]
)
export const selectArmorIsUpgradable = createSelector(
  [selectArmorByName],
  (armor) => (armor?.level ?? Level.Base) < Level.Four
)
