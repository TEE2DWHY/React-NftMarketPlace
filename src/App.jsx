import { WagmiProvider } from "wagmi";
import Home from "./pages/Home/Home";
import { config } from "./utils/wagmiConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import Header from "./components/Header";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <Header />
            <Home />
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
};

export default App;
