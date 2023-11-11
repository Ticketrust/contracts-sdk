
# Ticketrust SDK

## Overview
Ticketrust SDK is a powerful and easy-to-use Node.js module for interacting with Ticketrust smart contracts. It provides a simplified interface to the Ethereum blockchain for event ticketing, leveraging smart contracts for event management and NFT-based ticketing.

## Installation
```bash
npm install ticketrust-sdk
```

## Importing
```javascript
import { TicketrustInstance } from 'ticketrust-sdk';
```

## Key Features
- Create and manage events using Ethereum smart contracts
- Mint tickets with various payment methods: ETH, fiat, or other tokens
- Advanced ticketing options, such as minting with exact ETH or tokens
- Retrieve event information and payee details
- Offchain URI support for event data
- Extensive event handling capabilities

## Getting Started
1. **Initialize the Ticketrust Instance**
   ```javascript
   import { ethers } from "ethers";
   import { TicketrustInstance } from 'ticketrust-sdk';

   const provider = new ethers.providers.JsonRpcProvider('RPC_URL');
   const wallet = new ethers.Wallet('PRIVATE_KEY', provider);
   const ticketrust = new TicketrustInstance(wallet);
   ```

2. **Create an Event**
   ```javascript
   const eventParams = {
       // Event parameters
   };
   await ticketrust.createEvent(eventParams);
   ```

3. **Mint Tickets**
   Various minting functions are available depending on the payment method:
   - `mintWithETH`
   - `mintWithToken`
   - `mintWithTokenForExactETH`
   - `mintWithETHForExactTokens`
   - `mintWithFiat`
   - `mintBatchWithFiat`

4. **Retrieve Event Information**
   ```javascript
   const eventInfo = await ticketrust.getEventInfo(eventId);
   ```

## API Reference
Please refer to the [API documentation](docs.ticketrust.io) for detailed information about each function.

## Contributing
Contributions are welcome! Please read our [contributing guidelines](link-to-contributing-guidelines) before submitting pull requests.

