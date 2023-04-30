"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractInstance = void 0;
const ethers_1 = require("ethers");
const getContractInstance = (contractInfo) => {
    const { address, abi, signer } = contractInfo;
    const contract = new ethers_1.ethers.Contract(address, abi, signer);
    return contract;
};
exports.getContractInstance = getContractInstance;
