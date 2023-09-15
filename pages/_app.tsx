import theme from "utils/theme";
import React from "react";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { SidebarOptionsProvider } from "contexts/SidebarOptionsContext";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <SidebarOptionsProvider >
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ToastContainer
              toastClassName="!bg-[#1c1c1c] "
              bodyClassName="!bg-[#1c1c1c] !font-red"
              hideProgressBar
            />
            <Component {...pageProps} />
            <Analytics />
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </SidebarOptionsProvider>
  );
}

export default MyApp;
