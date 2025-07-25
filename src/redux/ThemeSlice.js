import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("darkMode");
  return savedTheme ? JSON.parse(savedTheme) : false;
};

const themeSlice = createSlice({
  name: "Theme",
  initialState: {
    darkMode: getInitialTheme(),
  },

  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
