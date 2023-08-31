import { useConnectors } from "@starknet-react/core";


export default function Connect() {
    const { connect, connectors } = useConnectors()
  
    return (
      <ul>
        {connectors.map((connector) => (
          <li key={connector.id}>
            <button onClick={() => connect(connector)}>
              Connect {connector.id}
            </button>
          </li>
        ))}
      </ul>
    )
  }

//   export default function Connect() {
//     const { connect, connectors, disconnect } = useConnectors();
  
//     return (
//       <div>
//         {connectors.map((connector) => (
            
//           <button
//             key={connector.id}
//             onClick={() => connect(connector)}
//             disabled={!connector.available()}
//           >
//             Connect with {connector.id}
//           </button>
//         ))}
//       </div>
//     );
//   }