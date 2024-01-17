import { createConfig } from "@ponder/core";
import { http } from "viem";

import { PonderAbi } from "./abis/PonderAbi";

export default createConfig({
  networks: {
    polygonMumbai: {
      chainId: 80001,
      transport: http(process.env.PONDER_RPC_URL_80001),
    },
  },
  contracts: {
    Ponder: {
      abi: PonderAbi,
      address: "0xc811cb1a0a0012f0d4adaf1bb6599576863c3948",
      network: "polygonMumbai",
    },
  },
});
