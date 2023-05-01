import { ContractInterface, ethers, Provider, Signer, Wallet } from "ethers";
import { getContractInstance } from "./helpers";
import { ContractInfo, CreateEventParams, MintBatchWithFiatParams, MintWithETHForExactTokensParams, MintWithETHParams, MintWithFiatParams, MintWithTokenForExactETHParams, MintWithTokenParams, MintWithTokensForExactTokensParams, OptionTicketParams, RemoveOptionParams } from "./types";
import { contractAddress } from "./contractAddress";
import { ticketrustABI } from "./contractABI";

class TicketrustInstance {
    contract: ethers.Contract;
    constructor(signer: Signer | Provider | Wallet) {
        const contractInfo: ContractInfo = {
            address: contractAddress,
            abi: JSON.parse(ticketrustABI),
            signer: signer
        }
        this.contract = getContractInstance(contractInfo)
    }
    
    async createEvent(params: CreateEventParams) {
        const { supplyDateFees, referenceToken, eventPrice, greyMarketAllowed, offchainData, payees, shares } = params
        const functionArgs = [supplyDateFees, referenceToken, eventPrice, greyMarketAllowed, offchainData, payees, shares]

        const callResult = await this.contract.createTicketing(...functionArgs)

        return callResult
    }

    async mintWithETH(params: MintWithETHParams) {
        const { eventId, toAddress, amount, data, value } = params
        const functionArgs = [eventId, toAddress, amount, data]

        const callResult = await this.contract.mintWithETH(...functionArgs, { value: value })

        return callResult
    }

    async mintWithToken(params: MintWithTokenParams) {
        const { tokenAddress, eventId, toAddress, amount, data } = params
        const functionArgs = [tokenAddress, eventId, toAddress, amount, data]

        const callResult = await this.contract.mintWithToken(...functionArgs)

        return callResult
    }

    async mintWithTokenForExactETH(params: MintWithTokenForExactETHParams) {
        const { maxTokenAmount, tokenAddress, eventId, toAddress, amount, data } = params
        const functionArgs = [maxTokenAmount, tokenAddress, eventId, toAddress, amount, data]

        const callResult = await this.contract.mintWithTokenForExactETH(...functionArgs)

        return callResult
    }

    async mintWithETHForExactTokens(params: MintWithETHForExactTokensParams) {
        const { eventId, toAddress, amount, data, value } = params
        const functionArgs = [eventId, toAddress, amount, data]

        const callResult = await this.contract.mintWithETHForExactTokens(...functionArgs, { value: value })

        return callResult
    }

    async mintWithTokensForExactTokens(params: MintWithTokensForExactTokensParams) {
        const { maxTokenAmount, tokenAddress, eventId, toAddress, amount, data } = params
        const functionArgs = [maxTokenAmount, tokenAddress, eventId, toAddress, amount, data]

        const callResult = await this.contract.mintWithTokensForExactTokens(...functionArgs)

        return callResult
    }

    async mintWithFiat(params: MintWithFiatParams) {
        const { toAddress, eventId, amount, data } = params
        const functionArgs = [toAddress, eventId, amount, data]

        const callResult = await this.contract.mintWithFiat(...functionArgs)

        return callResult
    }

    async mintBatchWithFiat(params: MintBatchWithFiatParams) {
        const { toAddress, eventIds, amounts, data } = params
        const functionArgs = [toAddress, eventIds, amounts, data]

        const callResult = await this.contract.mintBatchWithFiat(...functionArgs)

        return callResult
    }
    
    async optionTicket(params: OptionTicketParams) {
        const { eventId, amount, duration, value } = params
        const functionArgs = [eventId, amount, duration]

        const callResult = await this.contract.optionTicket(...functionArgs, { value: value })

        return callResult
    }

    async removeOption(params: RemoveOptionParams) {
        const { eventId, optionOwner, amount } = params
        const functionArgs = [eventId, optionOwner, amount]

        const callResult = await this.contract.removeOption(...functionArgs)

        return callResult
    }

    async release(eventId: number, payee: string, tokenAddress: string) {
        const functionArgs = [eventId, payee, tokenAddress]

        const callResult = await this.contract.release(...functionArgs)

        return callResult
    }

    /* **************
     *   Getters    *
     * **************/
    
    async getEventInfo(eventId: number) {
        const functionArgs = [eventId]

        const callResult = await this.contract.eventInfo(...functionArgs)

        const event = {
            eventCreator: callResult.eventCreator,
            eventDate: callResult.eventDate.toString(),
            referenceTokenAddress: callResult.referenceTokenAddress,
            eventPrice: callResult.eventPrice.toString(),
            optionFees: callResult.optionFees.toString(),
            eventInitialSupply: callResult.eventInitialSupply.toString(),
            currentSupply: callResult.currentSupply.toString(),
            offchainData: callResult.offchainData.toString(),
        }

        return event
    }
    
    async getPayees(eventId: number): Promise<[string[], number[]]> {
        const functionArgs = [eventId]

        const callResult = await this.contract.getPayees(...functionArgs)
        const parsedResult: [string[], number[]] = [callResult[0], []]

        callResult[1].forEach(element => {
            parsedResult[1].push(element.toString())
        });

        return parsedResult
    }

    async offchainURI(eventId: number) {
        const functionArgs = [eventId]

        const callResult = await this.contract.uri(...functionArgs)

        return callResult
    }

    async releasable(eventId: number, payee: string) {
        const functionArgs = [eventId, payee]

        const callResult = await this.contract.releasable(...functionArgs)

        return callResult.toString()
    }

    getEventArgs(eventName: string) {
        switch (eventName) {
            case 'EventCreated':
                return ['id', 'owner', 'initialSupply', 'eventDate', 'optionFees', 'referenceTokenAddress', 'eventPrice', 'greyMarketAllowed']
            case 'OffchainDataUpdated':
                return ['eventId', 'timestamp', 'url'];
            case 'OptionAdded':
                return ['optionOwner', 'eventId', 'amount', 'duration'];
            case 'OptionRemoved':
                return ['optionOwner', 'eventId', 'amount'];
            case 'TransferSingle':
                return ['operator', 'from', 'to', 'id', 'value'];
            default:
                throw "Event name does not exist"
        }
    }
}



export { TicketrustInstance }