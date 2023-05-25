export const ItemReducer = (state: ItemState, action: ItemActions) => {
  switch (action.type) {
    case "set_item": {
      return {
        ...state,
        [action.payload.item]: action.payload.level,
      }
    }
    case "init_store":
      return action.payload
  }
}
export type ItemState = Record<string, number>
export type ItemActionsMap = {
  ["set_item"]: { item: string; level: number }
  ["init_store"]: ItemState
}
export type ItemActions = {
  [Key in keyof ItemActionsMap]: {
    type: Key
    payload: ItemActionsMap[Key]
  }
}[keyof ItemActionsMap]
