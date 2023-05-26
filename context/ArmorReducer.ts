import { Level } from "@/types/data"

export const ArmorReducer = (state: ArmorState, action: ArmorActions) => {
  switch (action.type) {
    case "set_armor": {
      state[action.payload.armor] = action.payload.level
      return state
    }
    case "init_store":
      return action.payload
    case "upgrade_armor":
      if (state[action.payload.armor] === undefined)
        state[action.payload.armor] = Level.Ignored
      if (state[action.payload.armor] === Level.Ignored)
        state[action.payload.armor] = Level.Base
      state[action.payload.armor] += 1
      state[action.payload.armor] = Math.min(
        state[action.payload.armor] as number,
        Level.Four
      )
      return state
  }
}
export type ArmorState = Record<string, number>
export type ArmorActionsMap = {
  ["set_armor"]: { armor: string; level: number }
  ["upgrade_armor"]: { armor: string }
  ["init_store"]: ArmorState
}
export type ArmorActions = {
  [Key in keyof ArmorActionsMap]: {
    type: Key
    payload: ArmorActionsMap[Key]
  }
}[keyof ArmorActionsMap]
