import React, { useState } from 'react';
import './base.css';
// import Search from '../component/Search';
// import Notification from '../component/Notification';
import Profiledropdown from '../component/Profiledropdown';
import { Button } from "react-bootstrap";
import Wallet from '../utils/wallet';
import SweetAlert from "react-bootstrap-sweetalert";
import { connect, useSelector } from "react-redux";
import { connected, disconnect } from "../store/reducers/walletSlice";

const Header = (props) => {
    const token = useSelector(state => state.auth.token);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         alert: null
    //     }
    //     this.hideAlert = this.hideAlert.bind(this);
    // }
    const [alert, setalert] = useState(null);

    const connectWallet = async () => {
        if (!token) {
            window.location.href = "/login"
            return;
        }
        try {
            if (!props.wallet.wallet_connected) {
                if (!Wallet.ethersProvider) {
                    await Wallet.connect();
                }

                props.connected({ address: Wallet.account, provider: Wallet.ethersProvider })
                showAlert('Wallet connected successfully', 'success');
            } else {
                Wallet.disconnect(true);
                showAlert('Wallet disconnected', 'info');
                props.disconnect();
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
                    {props.wallet.wallet_connected ? 'Disconnect Wallet' : 'Connect Wallet'}
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



const mapStateToProps = state => ({
    wallet: state.wallet,
});
const mapDispatchToProps = { connected, disconnect }
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
