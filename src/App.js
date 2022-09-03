import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles"
import theme from "./Theme/Theme"
import AdapterDateFns from '@date-io/date-fns';
import { LocalizationProvider } from '@mui/x-date-pickers'
import GlobalState from "./context/GlobalState"

function App() {
 
  

  return (
    <>
    <GlobalState>
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Home/>
    </LocalizationProvider>
    </ThemeProvider>
    </GlobalState>
    </>
  );
}

export default App;
