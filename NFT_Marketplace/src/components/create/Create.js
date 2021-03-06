import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { NotificationSuccess,  NotificationError} from "../ui/Notifications";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";
import { uploadToIpfs } from "../../utils/minter";
import { createNft } from "../../utils/minter";
import { ethers } from "ethers";

import { getContract } from '../../hooks/useContract';
import { nftAbi, nftAddress, marketAbi, marketAddress } from "../../contracts";


const AddNfts = () => {
  // state for the form data
  const [description, setDescription] = useState("");
  const [exteralUrl, setExteralUrl] = useState("");
  const [ipfsImage, setIpfsImage] = useState("");
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);

  // allows to redirect user after a function is called
  const navigate = useNavigate();

  //connector, library, chainId, account, activate, deactivate
	const web3reactContext = useWeb3React();

  // check if all form data has been filled
  const isFormFilled = () =>
  name && ipfsImage && description && price;
  
  // close the popup modal
  const handleClose = () => {
    setShow(false);
  };
  
  // calls function minter from utils folder to mint the NFT and list it on the market
  const addNft = async (data) => {
    try {
      if (!web3reactContext.account) {
        alert("Please connect wallet.");
      }
      if (!price) {
        alert("Your NFT must have a price.");
      }
      // contract abstractions
      const minterContract = 
        getContract(web3reactContext.library, web3reactContext.account, nftAddress, nftAbi['abi']);
      const marketContract = 
        getContract(web3reactContext.library, web3reactContext.account, marketAddress, marketAbi['abi']);
      // mint the NFT and list it on the marketplace
      await createNft(minterContract, marketContract, price, data);
      toast(<NotificationSuccess text="Updating NFT list...." />);
      // redirect user to profile page
      navigate(`/profile`)
      } catch (error) {
        console.log({ error });
        toast(<NotificationError text="Failed to create an NFT." />);
      }
    };

  // parses the price into Ether format from form input
  const getPrice = (e) => {
    try {
      const listingPrice = ethers.utils.parseEther(e.toString())
      setPrice(listingPrice);
    } catch (error) {
      console.log({ error })
      toast(<NotificationError text="Price must be a Number." />);
    }
  }

  // display the popup modal
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        variant="outline-dark"
        className="rounded-pill px-5 m-2"
      >
        Create NFT
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create NFT</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <FloatingLabel
              controlId="inputLocation"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Name of NFT"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="inputDescription"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="description"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="InputExternalUrl"
              label="ExternalUrl"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="external url to your NFT (optional)"
                style={{ height: "80px" }}
                onChange={(e) => {
                  setExteralUrl(e.target.value);
                }}
              />
            </FloatingLabel>

            <Form.Control
              type="file"
              className={"mb-3"}
              onChange={async (e) => {
                const imageUrl = await uploadToIpfs(e);
                if (!imageUrl) {
                  alert("failed to upload image");
                  return;
                }
                setIpfsImage(imageUrl);
              }}
              placeholder="Product name"
            ></Form.Control>

          <FloatingLabel
              controlId="InputPrice"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Listing Price for your NFT"
                style={{ height: "80px" }}
                onChange={(e) => {
                  getPrice(e.target.value);
                }}
              />
              <select>
                  <option value="MATIC">MATIC</option>
              </select>
            </FloatingLabel>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              addNft({
                name,
                description,
                exteralUrl,
                ipfsImage,
                ownerAddress: web3reactContext.account
              });
              handleClose();
            }}
          >
            Create NFT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNfts;
