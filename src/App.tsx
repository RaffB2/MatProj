import "./App.css";
import { Album } from "./components/Album";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2b2e4a",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Album />
      </div>
    </ThemeProvider>
  );
}

export default App;
