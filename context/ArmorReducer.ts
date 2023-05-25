export const ArmorReducer = (state: ArmorState, action: ArmorActions) => {
  switch (action.type) {
    case "set_armor": {
      return {
        ...state,
        [action.payload.armor]: action.payload.level,
      }
    }
    case "init_store":
      return action.payload
  }
}
export type ArmorState = Record<string, number>
export type ArmorActionsMap = {
  ["set_armor"]: { armor: string; level: number }
  ["init_store"]: ArmorState
}
export type ArmorActions = {
  [Key in keyof ArmorActionsMap]: {
    type: Key
    payload: ArmorActionsMap[Key]
  }
}[keyof ArmorActionsMap]
