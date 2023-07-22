import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./nav-slice.js";
import contactReducer from "./contact-slice.js";

const store = configureStore({
	reducer: {
		nav: navReducer,
		contact: contactReducer,
	},
});

export default store;
