const { ethers, run } = require("hardhat");

async function main() {
  const EthoOruContractFactory = await ethers.getContractFactory("Marketplace");
  console.log("deploying");
  const DeployPannuren = await EthoOruContractFactory.deploy();
  await DeployPannuren.deployed();
  console.log(`address: ${DeployPannuren.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
