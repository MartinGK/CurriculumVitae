'use client'
import theme from "utils/theme";
import React, { createContext } from "react";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import { SidebarOptions } from "store/sidebarOptions";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.css";
import "../styles/globals.css";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const sidebarOptions = new SidebarOptions()

export const SidebarOptionsContext = createContext<SidebarOptions>(sidebarOptions);

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {

  return (
    <SidebarOptionsContext.Provider value={sidebarOptions} >
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
    </SidebarOptionsContext.Provider>
  );
}

export default MyApp;
