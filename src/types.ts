import { ContractInterface, ethers } from "ethers"

interface ContractInfo {
    address: string,
    abi: ethers.InterfaceAbi,
    signer: ethers.Signer | ethers.Provider | ethers.Wallet
}

interface CreateEventParams {
    supplyDateFees: [number, number, number]
    referenceToken: string
    eventPrice: string
    greyMarketAllowed: boolean
    offchainData: string
    payees: string[]
    shares: number[]
}

interface MintWithETHParams {
    eventId: number
    toAddress: string
    amount: number
    data: string
    value: string
}

interface MintWithTokenParams {
    tokenAddress: string
    eventId: number
    toAddress: string
    amount: number
    data: string
}

interface MintWithTokenForExactETHParams {
    maxTokenAmount: string
    tokenAddress: string
    eventId: number
    toAddress: string
    amount: number
    data: string
}

interface MintWithETHForExactTokensParams {
    eventId: number
    toAddress: string
    amount: number
    data: string
    value: string
}

interface MintWithTokensForExactTokensParams {
    maxTokenAmount: string
    tokenAddress: string
    eventId: number
    toAddress: string
    amount: number
    data: string
}

interface MintWithFiatParams {
    toAddress: string
    eventId: number
    amount: number
    data: string
}

interface MintBatchWithFiatParams {
    toAddress: string
    eventIds: number[]
    amounts: number[]
    data: string
}

interface OptionTicketParams {
    eventId: number
    amount: number
    duration: number
    value: number
}

interface RemoveOptionParams {
    eventId: number
    optionOwner: string
    amount: number
}

export type {
    ContractInfo, 
    CreateEventParams,
    MintWithETHParams,
    MintWithTokenParams,
    MintWithTokenForExactETHParams,
    MintWithETHForExactTokensParams,
    MintWithTokensForExactTokensParams,
    MintWithFiatParams,
    MintBatchWithFiatParams,
    OptionTicketParams,
    RemoveOptionParams
}
