import { createSlice } from "@reduxjs/toolkit";

const valModalSlice = createSlice({
	name: "valModal",
	initialState: { value: false },
	reducers: {
		setValModal: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setValModal } = valModalSlice.actions;

export default valModalSlice.reducer;
