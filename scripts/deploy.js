// scripts/deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const CloudCoinStaking = await ethers.getContractFactory("CloudCoinStaking");
  const cloudCoinStaking = await CloudCoinStaking.deploy(8, 2, 2024); // Start date: 7th February 2024
  await cloudCoinStaking.deployed();

  console.log("CloudCoinStaking deployed to:", cloudCoinStaking.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
