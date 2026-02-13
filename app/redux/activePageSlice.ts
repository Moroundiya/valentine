import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
	name: "activePage",
	initialState: {
		activePage: "gift",
		valModal: false,
		spinModal: false,
		gift: "",
		musicPlaying: false,
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

		setMusicPlaying: (state, action) => {
			state.musicPlaying = action.payload;
		},
	},
});

export const {
	setActivePage,
	setValModal,
	setSpinModal,
	setGift,
	setMusicPlaying,
} = activePageSlice.actions;

export default activePageSlice.reducer;
