"use client";
import { ReactNode } from "react";
import { SidebarOptionsProvider } from "contexts/sidebarOptionsContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SidebarOptionsProvider>
      <QueryClientProvider client={queryClient}>

        <ToastContainer
          toastClassName="!bg-[#1c1c1c] "
          bodyClassName="!bg-[#1c1c1c] !font-red"
          hideProgressBar
        />
        {children}
      </QueryClientProvider>
    </SidebarOptionsProvider>
  );
}