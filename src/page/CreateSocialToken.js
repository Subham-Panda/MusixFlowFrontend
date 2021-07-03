import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { getTxEventData } from '../utils/blockchain/events';
import SocialTokenFactory from '../artifacts/contracts/token/social/SocialTokenFactory.sol/SocialTokenFactory.json';

const CreateSocialToken = () => {
    const [socialtokenid, setSocialTokenId] = useState();
    const [TokenName, setTokenName] = useState();
    const [TokenSymbol, setTokenSymbol] = useState();

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    const generateSocialToken = async () => {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log({ provider });
            const signer = provider.getSigner()
            const contract = new ethers.Contract(
                process.env.REACT_APP_SOCIAL_TOKEN_FACTORY,
                SocialTokenFactory.abi,
                signer
            );
            console.log(contract)
            console.log(signer)
            const signerAddress = await signer.getAddress();
            console.log(signerAddress)
            const whitelistAddress = await contract.whitelist(signerAddress)
            whitelistAddress.wait();
            console.log("WHITELISTED")
            const [socialTokenAddress] = await getTxEventData(
                contract.create({
                    creator: signerAddress,
                    collateral: process.env.REACT_APP_MOCKUSDC,
                    maxSupply: ethers.utils.parseEther('10000000'),
                    slope: ethers.utils.parseEther('1'),
                    name: TokenName.trim(),
                    symbol: TokenSymbol.trim(),
                }),
                'SocialTokenCreated(address, address)',
                contract.interface
            );
            setSocialTokenId(socialTokenAddress);
            console.log(`SOCIAL TOKEN ADDRESS: ${socialTokenAddress}`);
        }

        // if (typeof window.ethereum !== 'undefined' && TokenName && TokenSymbol && TokenName.trim()!=='' && TokenSymbol.trim()!=='') {

        // }
    };

    return (
        <>
            <h1>CREATE SOCIAL TOKEN</h1>
            <br />
            <label htmlFor="tokenName">TOKEN NAME: </label>
            <input
                onChange={(e) => setTokenName(e.target.value)}
                placeholder="Social Token Name"
                id="tokenName"
            />
            <br />
            <label htmlFor="tokenSymbol">TOKEN SYMBOL: </label>
            <input
                onChange={(e) => setTokenSymbol(e.target.value)}
                placeholder="Social Token Symbol"
                id="tokenSymbol"
            />
            <br />
            <Button variant="primary" size="lg" onClick={generateSocialToken}>
                CREATE
            </Button>{' '}
            <br />
            <h2>Social token address is : {socialtokenid}</h2>
        </>
    );
};

export default CreateSocialToken;
