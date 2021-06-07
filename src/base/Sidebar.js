import React, { Component } from 'react';
import './base.css';
import { Link } from 'react-router-dom';
import settings from '../assets/images/settings.svg';
import { assetsImages } from '../constants/images';


class Sidebar extends Component {
    state = {
        activePage: "home"
    }
    render() {
        console.log(this.state, "state")
        const { activePage } = this.state
        return (
            <div className="side-bar-main">
                <div className="logo-website-main">
                    <Link to={'/'} className="nav-link">
                        <img src={assetsImages.logo} />
                    </Link>
                </div>
                <div className="side-bar-navigation">
                    <Link to={'/inflowmusic'}>
                        <div className={activePage === "inflowmusic" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "inflowmusic" })}>
                            <img src={assetsImages.wallet} />
                        </div>
                    </Link>
                    <Link to={'/news'}>
                        <div className={activePage === "demo1" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "demo1" })}>
                            <img src={assetsImages.wallet} />
                        </div>
                    </Link>
                    <Link to={'/leaderboard'}>
                    <div className={activePage === "demo2" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "demo2" })}>
                        <img src={assetsImages.wallet} />
                    </div>
                    </Link>
                    <Link to={'/accountsettings'}>
                    <div className={activePage === "demo3" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "demo3" })}>
                        <img src={assetsImages.wallet} />
                    </div>
                    </Link>
                    <Link to={'/lebels'}>
                    <div className={activePage === "demo4" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "demo4" })}>
                        <img src={assetsImages.wallet} />
                    </div>
                    </Link>
                    <Link to={'/'}>
                    <div className={activePage === "demo5" ? "nav-link-main active" : "nav-link-main"} onClick={() => this.setState({ activePage: "demo5" })}>
                        <img src={assetsImages.wallet} />
                    </div>
                    </Link>
                    <div  className={activePage === "demo6" ? "nav-link-main settings-icon active" : "nav-link-main settings-icon"} onClick={() => this.setState({ activePage: "demo6" })}>
                        <img src={assetsImages.settings} />
                    </div>
                </div>
            </div>
        )
    }
}



export default Sidebar