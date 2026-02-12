import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
	name: "activePage",
	initialState: {
		activePage: "preloader",
		valModal: false,
		spinModal: false,
		gift: "",
	},
	reducers: {
		setActivePage: (state, action) => {
			state.activePage = action.payload;
		},

		setValModal: (state, action) => {
			state.valModal = action.payload;
		},
		setSpinModal: (state, action) => {
			state.spinModal = action.payload;
		},

		setGift: (state, action) => {
			state.gift = action.payload;
		},
	},
});

export const { setActivePage, setValModal, setSpinModal, setGift } =
	activePageSlice.actions;

export default activePageSlice.reducer;
