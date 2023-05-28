export const ItemReducer = (state: ItemState, action: ItemActions) => {
  switch (action.type) {
    case "set_item": {
      state[action.payload.item] = Math.max(action.payload.level, 0)
      return state
    }
    case "init_store":
      return action.payload
    case "use_item":
      if (state[action.payload.item] === undefined)
        state[action.payload.item] = 0
      state[action.payload.item] -= action.payload.amount
      state[action.payload.item] = Math.max(
        state[action.payload.item] as number,
        0
      )

      return state
  }
}
export type ItemState = Record<string, number>
export type ItemActionsMap = {
  ["set_item"]: { item: string; level: number }
  ["use_item"]: { item: string; amount: number }
  ["init_store"]: ItemState
}
export type ItemActions = {
  [Key in keyof ItemActionsMap]: {
    type: Key
    payload: ItemActionsMap[Key]
  }
}[keyof ItemActionsMap]
