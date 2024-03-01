const { bytecode } = require("../artifacts/contracts/Vault.sol/Vault.json");
const { encoder, create2Address } = require("../utils/utils.js")

const main = async () => {
    const factoryAddr = "0xcBb8aFd781e02ede865ab492dE1FA0Ecb0783db0"; // change your factory address
    const unlockTime = "1709289009" // change your timestamp
    const saltHex = ethers.utils.id("1234");
    const initCode = bytecode + encoder(["uint"], [unlockTime]);

    const create2Addr = create2Address(factoryAddr, saltHex, initCode);
    console.log("precomputed address:", create2Addr);

    //  create a connection to your factory using ethers by adding the following:
    const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
    const factory = await Factory.attach(factoryAddr);

    // call the factory deploy function and pass in our init code and salt hex.
    // Then wait for the transaction receipt and print the deployed address:
    const lockDeploy = await factory.deploy(initCode, saltHex);
    const txReceipt = await lockDeploy.wait();
    console.log("Deployed to:", txReceipt.events[0].args[0]);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });