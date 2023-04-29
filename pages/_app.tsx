import theme from "utils/theme";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
