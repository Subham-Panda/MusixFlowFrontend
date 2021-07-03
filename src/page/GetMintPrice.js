import React, {useState} from 'react';
import { Contract, ethers } from 'ethers';
import SocialToken from '../artifacts/contracts/token/social/SocialToken.sol/SocialToken.json'

const GetMintPrice = () => {
    const [SocialTokenAddress, setSocialTokenAddress] = useState();
    const [MintPrice, setMintPrice] = useState();

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    const fetchTokenMintPrice = async () => {
        if (typeof window.ethereum !== 'undefined' && SocialTokenAddress && SocialTokenAddress !== '') {
            await requestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log({ provider });
            const contract = new Contract(SocialTokenAddress, SocialToken.abi, provider)
            console.log(contract)
            const mintPrice = await contract.getMintPrice(1)
            setMintPrice(mintPrice);
            console.log(`MINT PRICE: ${mintPrice}`);
        }
    };

    return (
        <div>
            <input onChange={e => setSocialTokenAddress(e.target.value)} placeholder="Social Token Address" /><br/>
            <button onClick={fetchTokenMintPrice}>Get Token Mint Price</button>
            <h1>{ MintPrice }</h1>
        </div>
      );

    
};

export default GetMintPrice;
