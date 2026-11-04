import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ThemeState = {
  theme: "light" | "dark";
};

const initialState: ThemeState = {
  theme: "light",
};

export const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState["theme"]>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = slice.actions;
export default slice.reducer;