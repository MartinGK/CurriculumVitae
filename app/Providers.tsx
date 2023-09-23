import { ReactNode } from "react";
import { SidebarOptionsProvider } from "contexts/sidebarOptionsContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SidebarOptionsProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SidebarOptionsProvider>
  );
}