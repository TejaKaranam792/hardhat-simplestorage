const { ethers, run, network } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");

  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment(); // Use this instead of deployed()

  const contractAddress = await simpleStorage.getAddress();
  console.log("Contract deployed to:", contractAddress);

  // Wait for confirmations (Optional: Change 5 to another number if needed)
  console.log("Waiting for confirmations...");
  await simpleStorage.deploymentTransaction().wait(1);

  // Verify contract on Etherscan (Only if on a live network)
  if (network.name !== "hardhat") {
    console.log("Verifying contract...");
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [], // Add constructor args if required
      });
      console.log("✅ Contract verified successfully!");
    } catch (error) {
      console.log("Verification failed:", error.message);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
