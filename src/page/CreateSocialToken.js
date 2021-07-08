import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';
import { getEventData } from '../utils/blockchain';
import { Inflow } from '../inflow-solidity-sdk/src/Inflow';
import SocialTokenFactory from '../artifacts/contracts/token/social/SocialTokenFactory.sol/SocialTokenFactory.json';

const CreateSocialToken = () => {
    const [socialtokenid, setSocialTokenId] = useState();
    const [TokenName, setTokenName] = useState();
    const [TokenSymbol, setTokenSymbol] = useState();
    const [address, setAddress] = useState();

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    const generateSocialToken = async () => {
        try {
            if (
                typeof window.ethereum !== 'undefined' &&
                TokenName &&
                TokenSymbol &&
                address &&
                TokenName.trim() !== '' &&
                TokenSymbol.trim() !== '' &&
                address !== ''
            ) {
                await requestAccount();
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                console.log({ provider });
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    process.env.REACT_APP_SOCIAL_TOKEN_FACTORY,
                    SocialTokenFactory.abi,
                    signer
                );
                console.log(contract);
                console.log(signer);
                const signerAddress = await signer.getAddress();
                console.log(signerAddress);
                const inflow = new Inflow(provider, 80001);
                const socialTokenAddress = await inflow.getTokenSocialFactory(
                    address
                );
                console.log({ socialTokenAddress });
                if (
                    socialTokenAddress &&
                    parseInt(socialTokenAddress, 16) !== 0
                ) {
                    setSocialTokenId(socialTokenAddress);
                    console.log(`SOCIAL TOKEN ADDRESS: ${socialTokenAddress}`);
                } else {
                    console.log('HEERREE');
                    const whitelistAddress = await contract.whitelist(
                        signerAddress
                    );
                    whitelistAddress.wait();
                    console.log('WHITELISTED');
                    const socialTokenAddress = await getEventData(
                        contract.create({
                            creator: address,
                            collateral: process.env.REACT_APP_MOCKUSDC,
                            maxSupply: ethers.utils.parseEther('10000000'),
                            slope: ethers.utils.parseEther('1'),
                            name: TokenName.trim(),
                            symbol: TokenSymbol.trim(),
                        }),
                        0
                    );
                    setSocialTokenId(socialTokenAddress);
                    console.log(`SOCIAL TOKEN ADDRESS: ${socialTokenAddress}`);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="dashboard-wrapper-main vw-100 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="heading">CREATE SOCIAL TOKEN</div>
                <div className="tab-settings-main">
                    <nav>
                        <div
                            className="nav nav-tabs nav-fill"
                            id="nav-tab"
                            role="tablist"
                        >
                            <a
                                className="nav-item nav-link active"
                                id="nav-home-tab"
                                data-toggle="tab"
                                href="#nav-home"
                                role="tab"
                                aria-controls="nav-home"
                                aria-selected="true"
                            >
                                Create Social Token
                            </a>
                        </div>
                    </nav>
                    <div className="tab-content pt-3" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                        >
                            <div className="account-setting-form">
                                <div className="grids-main-inputs">
                                    <div className="comman-grids">
                                        <input
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            value={address}
                                            placeholder="Owner Address"
                                            id="address"
                                        />
                                    </div>
                                    <div className="comman-grids">
                                        <input
                                            onChange={(e) =>
                                                setTokenName(e.target.value)
                                            }
                                            value={TokenName}
                                            placeholder="Social Token Name"
                                            id="tokenName"
                                        />
                                    </div>
                                    <div className="comman-grids">
                                        <input
                                            onChange={(e) =>
                                                setTokenSymbol(e.target.value)
                                            }
                                            value={TokenSymbol}
                                            placeholder="Social Token Symbol"
                                            id="tokenSymbol"
                                        />
                                    </div>
                                </div>
                                <div className="save-changes-main">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        onClick={generateSocialToken}
                                    >
                                        CREATE
                                    </Button>{' '}
                                </div>
                            </div>
                        </div>
                        <h2 className="p-3 my-3">
                            Social token address is : {socialtokenid}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateSocialToken;
