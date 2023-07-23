import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
	cardCount: 5,
	placedCards: [{ id: "stack", position: { xPos: 0.05, yPos: 0.6 } }],
};

const contactSlice = createSlice({
	name: "contact",
	initialState: initialState,
	reducers: {
		placeCard(state, action) {
			state.placedCards = [...state.placedCards, action.payload];
			state.cardCount = state.cardCount - 1;
		},
		submit(state, action) {
			const activeCard = state.placedCards.find(
				(card) => card.id == action.payload.id
			);

			activeCard.formData = action.payload.formData;
		},
		removeCard(state, action) {
			state.placedCards = state.placedCards.filter((card) => {
				return card.id != action.payload.id;
			});
			state.cardCount = state.cardCount + 1;
		},
	},
});

export const contactActions = contactSlice.actions;

export default contactSlice.reducer;
