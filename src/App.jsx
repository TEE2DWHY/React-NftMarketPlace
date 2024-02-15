import { WagmiProvider } from "wagmi";
import Home from "./pages/Home";
import { config } from "./utils/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <Home />
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default App;
