import theme from "utils/theme";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
