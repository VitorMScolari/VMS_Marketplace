// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // abstraction of the NFT contract
  const MyNFT = await hre.ethers.getContractFactory("NFT");
  // deploys NFT contract
  const myNFT = await MyNFT.deploy();
  // abstraction of the marketplace contract
  const Marketplace = await hre.ethers.getContractFactory("NftMarketplace");
  // deploys marketplace contract
  const marketplace = await Marketplace.deploy();

  // wait for contracts to be deployed
  await myNFT.deployed();
  await marketplace.deployed();

  console.log("NFT deployed to:", myNFT.address);
  // calls function to create and store files with NFT and marketplace addresses
  storeContractData(myNFT, "NFT");
  storeContractData(marketplace, "NftMarketplace", market=true);
}

function storeContractData(contract, name, market=null) {
  // require file system library
  const fs = require("fs");

  const network = 'rinkeby';

  // name of file where contract will be stored
  const contractsDir = __dirname + `/../src/contracts/${network}`;

  // create folder if it doesn't exist
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  if (market) {
      // write address of contract to file in the directory and parse to JSON
      fs.writeFileSync(
        contractsDir + `/${name}-address.json`,
        JSON.stringify({ marketAddress: contract.address }, undefined, 2)
      );
    
      const MyNFTArtifact = artifacts.readArtifactSync(name);
    
      // write ABI of contract to the file directory and parse to JSON
      fs.writeFileSync(
        contractsDir + `/${name}.js`,
        `export const marketAbi = ${JSON.stringify(MyNFTArtifact, null, 2)}`
      );
    } else {
       // write address of contract to file in the directory and parse to JSON
       fs.writeFileSync(
        contractsDir + `/${name}-address.json`,
        JSON.stringify({ nftAddress: contract.address }, undefined, 2)
      );
    
      const MyNFTArtifact = artifacts.readArtifactSync(name);
    
      // write ABI of contract to the file directory and parse to JSON
      fs.writeFileSync(
        contractsDir + `/${name}.js`,
        `export const nftAbi = ${JSON.stringify(MyNFTArtifact, null, 2)}`
      );
    }
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


