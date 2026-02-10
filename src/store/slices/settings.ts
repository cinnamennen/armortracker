import { RootState } from "@/store/store"
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SettingsState = { compact: boolean; dense: boolean }
export const initialState: SettingsState = { compact: false, dense: false }
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleCompact(state) {
      state.compact = !state.compact
    },
    toggleDense(state) {
      state.dense = !state.dense
    },

    initStore(state, action: PayloadAction<SettingsState>) {
      return action.payload
    },
  },
})

export const { toggleCompact, toggleDense, initStore } = settingsSlice.actions
export const selectSettings = (state: RootState) => state.settings
export default settingsSlice.reducer

export const selectCompact = createSelector(
  [selectSettings],
  (settings) => settings.compact
)

export const selectDense = createSelector(
  [selectSettings],
  (settings) => settings.dense
)
