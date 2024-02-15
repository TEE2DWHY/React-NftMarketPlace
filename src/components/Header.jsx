import "../styles/header.css";
import { ConnectKitButton } from "connectkit";
const Header = () => {
  return (
    <>
      <header>
        <div className="left">
          <h2 className="logo">NFT MarketPlace.</h2>
        </div>
        <div className="right">
          <ul>
            <li>Home</li>
            <li>Sell Nft</li>
          </ul>
          <ConnectKitButton theme="retro" />
        </div>
      </header>
    </>
  );
};

export default Header;
