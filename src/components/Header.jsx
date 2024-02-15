import "../styles/header.css";
import { ConnectKitButton } from "connectkit";
const Header = () => {
  return (
    <>
      <header>
        <div className="left">
          <h3>NFT MarketPlace</h3>
        </div>
        <ConnectKitButton theme="nouns" />
      </header>
    </>
  );
};

export default Header;
