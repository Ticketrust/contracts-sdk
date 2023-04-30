import { ethers, Provider, Signer, Wallet } from "ethers";
import { CreateEventParams, MintBatchWithFiatParams, MintWithETHForExactTokensParams, MintWithETHParams, MintWithFiatParams, MintWithTokenForExactETHParams, MintWithTokenParams, MintWithTokensForExactTokensParams, OptionTicketParams, RemoveOptionParams } from "./types";
declare class TicketrustInstance {
    contract: ethers.Contract;
    constructor(signer: Signer | Provider | Wallet);
    createEvent(params: CreateEventParams): Promise<any>;
    mintWithETH(params: MintWithETHParams): Promise<any>;
    mintWithToken(params: MintWithTokenParams): Promise<any>;
    mintWithTokenForExactETH(params: MintWithTokenForExactETHParams): Promise<any>;
    mintWithETHForExactTokens(params: MintWithETHForExactTokensParams): Promise<any>;
    mintWithTokensForExactTokens(params: MintWithTokensForExactTokensParams): Promise<any>;
    mintWithFiat(params: MintWithFiatParams): Promise<any>;
    mintBatchWithFiat(params: MintBatchWithFiatParams): Promise<any>;
    optionTicket(params: OptionTicketParams): Promise<any>;
    removeOption(params: RemoveOptionParams): Promise<any>;
    release(eventId: number, payee: string, tokenAddress: string): Promise<any>;
    getEventInfo(eventId: number): Promise<{
        eventCreator: any;
        eventDate: any;
        referenceTokenAddress: any;
        eventPrice: any;
        optionFees: any;
        eventInitialSupply: any;
        currentSupply: any;
        offchainData: any;
    }>;
    getPayees(eventId: number): Promise<[string[], number[]]>;
    offchainURI(eventId: number): Promise<any>;
    releasable(eventId: number, payee: string): Promise<any>;
    getEventArgs(eventName: string): string[];
}
export { TicketrustInstance };
