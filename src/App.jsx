import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/ThemeSlice";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center transition-all duration-800 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Dark mode</h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}

export default App;
