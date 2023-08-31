import { useNetwork } from "@starknet-react/core";

export default function Network() {
    const { chain } = useNetwork()
  
    return <span>{chain && chain.name}</span>
  }