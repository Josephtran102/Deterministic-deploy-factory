
# Deploy a Contract to the Same Address on Multiple Networks

npm init
npm install --save-dev hardhat
npx hardhat
npm install npm install --save-dev @nomiclabs/hardhat-ethers 'ethers@^5.0.0'
npm install @alch/alchemy-web3
npm install dotenv --save
npx hardhat account --address {YOUR_WALLET_ADDRESS}
npx hardhat compile
npx hardhat run scripts/vaultDeploy.js --network sepolia
npx hardhat run scripts/vaultDeploy.js --network mumbai
npx hardhat run scripts/vaultDeploy.js --network arbitrum
npx hardhat run scripts/vaultDeploy.js --network optimism

npx hardhat run scripts/vaultDeposit.js --network sepolia
npx hardhat run scripts/vaultDeposit.js --network mumbai
npx hardhat run scripts/vaultDeposit.js --network arbitrum
npx hardhat run scripts/vaultDeposit.js --network optimism

npx hardhat run scripts/vaultWithdraw.js --network sepolia
npx hardhat run scripts/vaultWithdraw.js --network mumbai
npx hardhat run scripts/vaultWithdraw.js --network arbitrum
npx hardhat run scripts/vaultWithdraw.js --network optimism

# Create2 to deriving contract addresses:

Create contract DeterministicDeployFactory.sol
npx hardhat compile
Create script: deployFactory.js

npx hardhat run scripts/deployFactory.js --network sepolia
npx hardhat run scripts/deployFactory.js --network mumbai
npx hardhat run scripts/deployFactory.js --network arbitrum
npx hardhat run scripts/deployFactory.js --network optimism

    ## Deploy a contract with the factory:   
    set the owner of our Vault.sol contract as msg.sender --> ( owner = payable(CHANGE TO YOUR ADDRESS); )
    npx hardhat compile

    ## Utility functions:
    mkdir utils
    Inside utils create, a file named utils.js

    ## Edit Vault deploy script or new script: 
    vaultDeploy_2.js
    
    Convert timestamp (unlocktimer --set 30): https://unixtime.org/
    Store your new Unix timestamp: const unlockTime = "YOUR TIMESTAMP"
    Create a variable to store your deployed factory address, as we will need this to connect to the factory:
    const factoryAddr = "0xcBb8aFd781e02ede865ab492dE1FA0Ecb0783db0" //YOUR FACTORY ADDRESS
    npx hardhat run scripts/vaultDeploy_2.js

    Result:
    precomputed address: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308

    // create a connection to your factory using ethers by adding the following:
    // call the factory deploy function and pass in our init code and salt hex.
    // Then wait for the transaction receipt and print the deployed address:

    npx hardhat run scripts/vaultDeploy_2.js --network sepolia
    npx hardhat run scripts/vaultDeploy_2.js --network mumbai
    npx hardhat run scripts/vaultDeploy_2.js --network arbitrum
    npx hardhat run scripts/vaultDeploy_2.js --network optimism

    If successful, your vault contract will deploy to your precomputed create2 address on each testnet:
    precomputed address: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    Deployed to: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    precomputed address: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    Deployed to: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    precomputed address: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    Deployed to: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    precomputed address: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308
    Deployed to: 0x6Ae0962dBB569f6779a7bc6e401e61d33e449308


# Deterministic-deploy-factory
