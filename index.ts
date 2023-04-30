import {BilleterieInstance} from './src/Billeterie';
import {MintTicketParams, ContractInfo, CreateEventParams} from './src/types'

import { ethers } from "ethers";
import { billeterieABI } from "./contractABI";
import { contractAddress } from "./contractAddress";

const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/d53260b9f071444bab2b519f2a52b1a8")
// const signer = new ethers.Wallet("5d1edb00af551a580e054c4e9ce56c01da3a2c9acc8dd00464808214fd0d642c", provider)

const contractInfo: ContractInfo = {
    address: contractAddress,
    abi: billeterieABI,
    signer: provider
}

const instance = new BilleterieInstance(contractInfo)

// const params: MintTicketParams = {
//     toAddress: "0x102BB817B5Acd75d3066B20883a2F917C5677777",
//     creator: "0x102BB817B5Acd75d3066B20883a2F917C5677777",
//     data: "0x",
//     amount: 2,
//     eventId: 3,
//     value: 2000000000000000
// }


// instance.mintTicket(params)
// .then(r => console.log(r))
// .catch(e => console.log(e))

// const params: CreateEventParams = {
//     supplyPriceDate: [100, 1000000000000000, 1668857444],
//     greyMarketAllowed: false,
//     optionFees: 7,
//     offchainData: "https://y0669s0jj1.execute-api.us-east-1.amazonaws.com/develop/event_uri?token_id=2",
//     payees: ["0x102BB817B5Acd75d3066B20883a2F917C5677777"],
//     shares: [100],
// }

// instance.createEvent(params)
// .then(r => console.log(r))
// .catch(e => console.log(e))


instance.offchainURI(2)
.then(r => console.log(r))
.catch(e => console.log(e))