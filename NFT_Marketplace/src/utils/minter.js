import { create as ipfsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { nftAddress, marketAddress } from "../contracts";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// helper function for minting the NFTs
export const createNft = async (
    minterContract,
    marketContract,
    price,
    { name, description, exteralUrl, ipfsImage, ownerAddress}
  ) => {
    await (async () => {
      // require that NFT has a name, description and an image
      if (!name || !description || !ipfsImage) return;

      // convert NFT metadata to JSON format
      const data = JSON.stringify({
        name,
        description,
        exteralUrl,
        image: ipfsImage,
        owner: ownerAddress
      });
  
      try {
        // save NFT metadata to IPFS
        const added = await client.add(data);
  
        // IPFS url for uploaded metadata
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;

        const owner2 = await fetchNftOwner(marketContract);

        console.log(owner2)
        console.log(ownerAddress)

        await marketContract.listItem(nftAddress, 1, 1);

        // mint the NFT and save the IPFS url to the blockchain
        await minterContract.safeMint(ownerAddress, url);
        
        const all_nfts = await getNfts(minterContract);

        // filter NFTs for user and find the last one minted in order to list on market
        let lastNftMinted = all_nfts.filter(e => e.owner.toLowerCase() === ownerAddress.toLowerCase());

        lastNftMinted = lastNftMinted[lastNftMinted.length - 1];

        let tokenId = lastNftMinted.index;

        console.log(tokenId)

        // calls function that lists the minted NFT in the marketplace
        await createMarketItem(minterContract, marketContract, price, tokenId);
  
      } catch (error) {
        console.log("Error listing NFT: ", error);
      }
    })();
};


// uploads image metadata to IPFS (file system storage)
export const uploadToIpfs = async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const added = await client.add(file, {
      progress: (prog) => console.log(`received: ${prog}`),
    });
    return `https://ipfs.infura.io/ipfs/${added.path}`;
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
};

// function to get NFTs from the NFT contract
export const getNfts = async (minterContract) => {
  try {
    const nfts = [];
    // gets total amount of NFTs in the contract
    const nftsLength = await minterContract.totalSupply();
    // loop through all NFTs
    for (let i = 0; i < Number(nftsLength); i++) {
      const nft = new Promise(async (resolve) => {
        // get NFT token URI to retrieve NFT metadata
        const res = await minterContract.tokenURI(i);
        const meta = await fetchNftMeta(res);
        const owner = await fetchNftOwner(minterContract, i);
        resolve({
          index: i,
          owner: owner,
          name: meta.data.name,
          image: meta.data.image,
          description: meta.data.description
        });
      });
      nfts.push(nft);
    }
    return Promise.all(nfts);
  } catch (e) {
    console.log({ e });
  }
};

// gets NFT metadata from IPFS
export const fetchNftMeta = async (ipfsUrl) => {
  try {
    if (!ipfsUrl) return null;
    const meta = await axios.get(ipfsUrl);
    return meta;
  } catch (e) {
    console.log({ e });
  }
};

// gets NFT owner from NFT contract
export const fetchNftOwner = async (minterContract, index) => {
  try {
    return await minterContract.ownerOf(index);
  } catch (e) {
    console.log({ e });
  }
};

// get NFT contract owner
export const fetchNftContractOwner = async (minterContract) => {
  try {
    let owner = await minterContract.owner();
    return owner;
  } catch (e) {
    console.log({ e });
  }
};

// List NFT in the marketplace
export const createMarketItem = async (minterContract, marketContract, price, tokenId) => {
  try {
    console.log(price);
    console.log(tokenId);
    // allows marketplace to trade the user NFTs
    await minterContract.setApprovalForAll(marketAddress, true);
    // creates the NFT item in the marketplace contract
    let owner = await marketContract.listItem(nftAddress, tokenId, 1);
    return owner;
  } catch (e) {
    console.log({ e });
  }
};
  