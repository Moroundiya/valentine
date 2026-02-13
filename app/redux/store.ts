import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./activePageSlice";

export const store = configureStore({
	reducer: {
		activePage: activePageReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
