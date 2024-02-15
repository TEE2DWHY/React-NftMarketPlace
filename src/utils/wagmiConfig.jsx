import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
const projectId = import.meta.env.VITE_WALLET_CONNECT;
import { getDefaultConfig } from "connectkit";

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
    },
    // Required API Keys
    walletConnectProjectId: projectId,
    // Required App Info
    appName: "Your App Name",
    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
