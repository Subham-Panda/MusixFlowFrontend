import React, { useState } from 'react';
import './base.css';
// import Search from '../component/Search';
// import Notification from '../component/Notification';
import Profiledropdown from '../component/Profiledropdown';
import { Button } from "react-bootstrap";
import Wallet from '../utils/wallet';
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { connected, disconnect } from "../store/reducers/walletSlice";

const Header = () => {
    const token = useSelector(state => state.auth.token);
    const wallet = useSelector(state => state.wallet);
    const dispatch = useDispatch()
    const [alert, setalert] = useState(null);

    console.log({wallet})

    const connectWallet = async () => {
        if (!token) {
            window.location.href = "/login"
            return;
        }
        try {
            if (!wallet.wallet_connected) {
                if (!Wallet.ethersProvider) {
                    await Wallet.connect();
                }
                dispatch(connected({ address: Wallet.account, provider: Wallet.ethersProvider }));
                showAlert('Wallet connected successfully', 'success');
            } else {
                Wallet.disconnect(true);
                showAlert('Wallet disconnected', 'info');
                dispatch(disconnect());
            }
        } catch (e) {
            console.log(e);
        }
    }

    const showAlert = (title, type) => {
        setalert(<SweetAlert style={{ color: '#000' }} type={type} onConfirm={hideAlert} timeout={2000} title={title} />)
    }

    const hideAlert = () => {
        setalert(null);
    }

    return (
        <div className="header-main">
            {alert}
            <div className="left-col-main">
                {/* <Search /> */}
            </div>
            <div className="right-col-main">
                <Button size="sm" className="mr-2 wallet-button" onClick={() => connectWallet()}>
                    {wallet.wallet_connected ? 'Disconnect Wallet' : 'Connect Wallet'}
                </Button>
                {/* <div className="notified-main">
                        <Notification />
                    </div> */}
                <div className="profile-dropdown">
                    <Profiledropdown />
                </div>
            </div>
        </div>
    )
}



export default Header;
