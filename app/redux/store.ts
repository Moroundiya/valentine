import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "./activePageSlice";
import valSliceReducer from "./valModalSlice";

export const store = configureStore({
	reducer: {
		activePage: activePageReducer,
		valModal: valSliceReducer,
	},
});
