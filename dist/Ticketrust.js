"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketrustInstance = void 0;
const helpers_1 = require("./helpers");
const contractAddress_1 = require("./contractAddress");
const contractABI_1 = require("./contractABI");
class TicketrustInstance {
    constructor(signer) {
        const contractInfo = {
            address: contractAddress_1.contractAddress,
            abi: JSON.parse(contractABI_1.ticketrustABI),
            signer: signer
        };
        this.contract = (0, helpers_1.getContractInstance)(contractInfo);
    }
    async createEvent(params) {
        const { supplyDateFees, referenceToken, eventPrice, greyMarketAllowed, offchainData, payees, shares } = params;
        const functionArgs = [supplyDateFees, referenceToken, eventPrice, greyMarketAllowed, offchainData, payees, shares];
        const callResult = await this.contract.createTicketing(...functionArgs);
        return callResult;
    }
    async mintWithETH(params) {
        const { eventId, toAddress, amount, data, value } = params;
        const functionArgs = [eventId, toAddress, amount, data];
        const callResult = await this.contract.mintWithETH(...functionArgs, { value: value });
        return callResult;
    }
    async mintWithToken(params) {
        const { tokenAddress, eventId, toAddress, amount, data } = params;
        const functionArgs = [tokenAddress, eventId, toAddress, amount, data];
        const callResult = await this.contract.mintWithToken(...functionArgs);
        return callResult;
    }
    async mintWithTokenForExactETH(params) {
        const { maxTokenAmount, tokenAddress, eventId, toAddress, amount, data } = params;
        const functionArgs = [maxTokenAmount, tokenAddress, eventId, toAddress, amount, data];
        const callResult = await this.contract.mintWithTokenForExactETH(...functionArgs);
        return callResult;
    }
    async mintWithETHForExactTokens(params) {
        const { eventId, toAddress, amount, data, value } = params;
        const functionArgs = [eventId, toAddress, amount, data];
        const callResult = await this.contract.mintWithETHForExactTokens(...functionArgs, { value: value });
        return callResult;
    }
    async mintWithTokensForExactTokens(params) {
        const { maxTokenAmount, tokenAddress, eventId, toAddress, amount, data } = params;
        const functionArgs = [maxTokenAmount, tokenAddress, eventId, toAddress, amount, data];
        const callResult = await this.contract.mintWithTokensForExactTokens(...functionArgs);
        return callResult;
    }
    async mintWithFiat(params) {
        const { toAddress, eventId, amount, data } = params;
        const functionArgs = [toAddress, eventId, amount, data];
        const callResult = await this.contract.mintWithFiat(...functionArgs);
        return callResult;
    }
    async mintBatchWithFiat(params) {
        const { toAddress, eventIds, amounts, data } = params;
        const functionArgs = [toAddress, eventIds, amounts, data];
        const callResult = await this.contract.mintBatchWithFiat(...functionArgs);
        return callResult;
    }
    async optionTicket(params) {
        const { eventId, amount, duration, value } = params;
        const functionArgs = [eventId, amount, duration];
        const callResult = await this.contract.optionTicket(...functionArgs, { value: value });
        return callResult;
    }
    async removeOption(params) {
        const { eventId, optionOwner, amount } = params;
        const functionArgs = [eventId, optionOwner, amount];
        const callResult = await this.contract.removeOption(...functionArgs);
        return callResult;
    }
    async release(eventId, payee, tokenAddress) {
        const functionArgs = [eventId, payee, tokenAddress];
        const callResult = await this.contract.release(...functionArgs);
        return callResult;
    }
    /* **************
     *   Getters    *
     * **************/
    async getEventInfo(eventId) {
        const functionArgs = [eventId];
        const callResult = await this.contract.eventInfo(...functionArgs);
        const event = {
            eventCreator: callResult.eventCreator,
            eventDate: callResult.eventDate.toString(),
            referenceTokenAddress: callResult.referenceTokenAddress,
            eventPrice: callResult.eventPrice.toString(),
            optionFees: callResult.optionFees.toString(),
            eventInitialSupply: callResult.eventInitialSupply.toString(),
            currentSupply: callResult.currentSupply.toString(),
            offchainData: callResult.offchainData.toString(),
        };
        return event;
    }
    async getPayees(eventId) {
        const functionArgs = [eventId];
        const callResult = await this.contract.getPayees(...functionArgs);
        const parsedResult = [callResult[0], []];
        callResult[1].forEach(element => {
            parsedResult[1].push(element.toString());
        });
        return parsedResult;
    }
    async offchainURI(eventId) {
        const functionArgs = [eventId];
        const callResult = await this.contract.uri(...functionArgs);
        return callResult;
    }
    async releasable(eventId, payee) {
        const functionArgs = [eventId, payee];
        const callResult = await this.contract.releasable(...functionArgs);
        return callResult.toString();
    }
    getEventArgs(eventName) {
        switch (eventName) {
            case 'EventCreated':
                return ['id', 'owner', 'initialSupply', 'eventDate', 'optionFees', 'referenceTokenAddress', 'eventPrice', 'greyMarketAllowed'];
            case 'OffchainDataUpdated':
                return ['eventId', 'timestamp', 'url'];
            case 'OptionAdded':
                return ['optionOwner', 'eventId', 'amount', 'duration'];
            case 'OptionRemoved':
                return ['optionOwner', 'eventId', 'amount'];
            case 'TransferSingle':
                return ['operator', 'from', 'to', 'id', 'value'];
            default:
                throw "Event name does not exist";
        }
    }
}
exports.TicketrustInstance = TicketrustInstance;
