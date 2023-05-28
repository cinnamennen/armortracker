import { Level } from "@/types/data"

export const ArmorReducer = (state: ArmorState, action: ArmorActions) => {
  switch (action.type) {
    case "set_armor": {
      console.log("setting", action)
      const stateElement = state[action.payload.armor]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level = action.payload.level
      return state
    }

    case "init_store":
      for (const key in action.payload) {
        const payloadElement = action.payload[key]
        if (payloadElement === undefined) continue
        if (typeof payloadElement === "number") {
          state[key] = { level: payloadElement, ignored: false }
        } else {
          state[key] = payloadElement
        }
      }
      return state
    case "upgrade_armor": {
      const stateElement = state[action.payload.armor]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.level += 1
      stateElement.level = Math.min(stateElement.level, Level.Four)
      return state
    }
    case "toggle_ignore": {
      const stateElement = state[action.payload.armor]
      if (stateElement === undefined) {
        throw new Error("Armor didn't initialize itself")
      }
      stateElement.ignored = !stateElement.ignored
    }
  }
}
type ArmorData = { level: number; ignored: boolean }
export type ArmorState = Record<string, ArmorData>
export type ArmorActionsMap = {
  ["set_armor"]: { armor: string; level: number }
  ["upgrade_armor"]: { armor: string }
  ["toggle_ignore"]: { armor: string }
  ["init_store"]: ArmorState | Record<string, number>
}
export type ArmorActions = {
  [Key in keyof ArmorActionsMap]: {
    type: Key
    payload: ArmorActionsMap[Key]
  }
}[keyof ArmorActionsMap]
