import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./activePageSlice";

export const store = configureStore({
	reducer: {
		activePage: activePageReducer,
	},
});
