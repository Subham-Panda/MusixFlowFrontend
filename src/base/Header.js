import React, { Component } from 'react';
import './base.css';
import Search from '../component/Search';
import Notification from '../component/Notification';
import Profiledropdown from '../component/Profiledropdown';
import {Button} from "react-bootstrap";
import Wallet from '../utils/wallet';
import SweetAlert from "react-bootstrap-sweetalert";
import {connect} from "react-redux";
import {connected, disconnect} from "../store/reducers/walletSlice";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            alert: null
        }
        this.hideAlert = this.hideAlert.bind(this);
    }

    async connectWallet() {
        try {
            if (!this.props.wallet.wallet_connected) {
                if (!Wallet.ethersProvider) {
                    await Wallet.connect();
                }
                this.props.connected({address: Wallet.account})
                this.showAlert('Wallet connected successfully', 'success');
            } else {
                Wallet.disconnect(true);
                this.showAlert('Wallet disconnected', 'info');
                this.props.disconnect();
            }
        } catch (e) {
            console.log(e);
        }
    }

    showAlert(title, type) {
        this.setState({
            alert: <SweetAlert style={{ color: '#000' }} type={type} onConfirm={this.hideAlert} timeout={2000} title={title}/>
        })
    }

    hideAlert() {
        this.setState({alert: null});
    }

    render() {
        return (
          <div className="header-main">
              {this.state.alert}
                <div className="left-col-main">
                    <Search />
                </div>
                <div className="right-col-main">
                    <Button size="sm" className="mr-2 wallet-button" onClick={() => this.connectWallet()}>
                        {this.props.wallet.wallet_connected ? 'Disconnect Wallet' : 'Connect Wallet'}
                    </Button>
                    <div className="notified-main">
                        <Notification />
                    </div>
                    <div className="profile-dropdown">
                        <Profiledropdown />
                    </div>
                </div>
          </div>
        )
    }
}



const mapStateToProps = state => ({
    wallet: state.wallet,
});
const mapDispatchToProps = {connected, disconnect}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
