import { localStorageMiddleware } from "@/store/localStorageMiddleware"
import armor from "@/store/slices/armor"
import items from "@/store/slices/items"
import settings from "@/store/slices/settings"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    armor,
    items,
    settings,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
