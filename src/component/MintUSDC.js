import React, { useState } from 'react';
import { Contract, ethers, Wallet } from 'ethers';
import MockUSDC from '../artifacts/contracts/mocks/MockUSDC.sol/MockUSDC.json';
import { Inflow } from '../inflow-solidity-sdk/src/Inflow';

const MintUSDC = () => {

	const [mockUSDCmint, setMockUSDCMint] = useState(0.0)

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    const mintUSDC = async () => {
        await requestAccount();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const admin = new Wallet(process.env.REACT_APP_ADMIN_PVT_KEY, provider);
        const signer = provider.getSigner();
        const usdc = new Contract(
            process.env.REACT_APP_MOCKUSDC,
            MockUSDC.abi,
            admin
        );
        const usdcMinter = usdc.connect(signer);
        console.log(mockUSDCmint)
        const inflow = new Inflow(provider, 80001);
        console.log(inflow.parseERC20("USDC", String(mockUSDCmint)))
        const signerAddress = await signer.getAddress();
		await (await usdcMinter.mint(inflow.parseERC20("USDC", String(mockUSDCmint)))).wait();
		console.log("MOCK USDC MINT SUCCESSFUL");
		const usdcBalance = await inflow.balanceOf("USDC", signerAddress)
		console.log("USDC BALANCE: ",usdcBalance)
    };

    return (
        <div>
			<input
				value={mockUSDCmint}
                onChange={(e) => setMockUSDCMint(e.target.value)}
                placeholder="MINT MOCK USDC"
            />
            <br />
            <button onClick={mintUSDC}>MINT MOCK USDC</button>
        </div>
    );
};

export default MintUSDC;
