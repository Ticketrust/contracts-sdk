import { ethers } from "ethers";
import { ContractInfo } from "./types";

export const getContractInstance = (contractInfo: ContractInfo) => {
    const {address, abi, signer} = contractInfo
    const contract = new ethers.Contract(address, abi, signer)

    return contract
}