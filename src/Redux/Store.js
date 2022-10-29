import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./feature/cocktailSlice";

export default configureStore({
  reducer: {
    app: CocktailSlice,
  },
});
