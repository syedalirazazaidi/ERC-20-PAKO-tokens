// import { CrowdSale } from "./../typechain-types/contracts/CrowdSale";
import { ethers } from "hardhat";
import { MyToken, CrowdSale } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("MyToken");
  const token: MyToken = await Token.deploy();
  console.log("Token address:", token.address);

  const CrowdSale = await ethers.getContractFactory("CrowdSale");
  const crowdsale: CrowdSale = await CrowdSale.deploy(token.address);
  console.log("crowdsale address:", crowdsale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
