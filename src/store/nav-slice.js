import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: "", selected: "" };

const navSlice = createSlice({
	name: "nav",
	initialState: initialState,
	reducers: {
		setPage(state, action) {
			state.selected = action.payload;
			state.page = action.payload;
		},
		setSelected(state, action) {
			state.selected = action.payload;
			state.page = "";
		},
	},
});

export const navActions = navSlice.actions;

export default navSlice.reducer;
