import { useAccount } from "@starknet-react/core";
import Connect from "./components/Connect";
import Network from "./components/Network";


function App() {
  const {address, isConnected, isReconnecting, account } = useAccount();

  return (
    <div className="h-full p-4 flex flex-col">
      <div className="flex-1 flex items-center text-center justify-center h-full">
        {isConnected ? (
          <div>
            <h1 className="title text-4xl shadowed mb-8">Demo starknet dapp</h1>
            <p>Hello, {address}, here is a list of your borrowing positions: </p>
          </div>
        ) : (
          <Connect />
        )}
        <Network />
      </div>
    </div>
  );
}

export default App;
