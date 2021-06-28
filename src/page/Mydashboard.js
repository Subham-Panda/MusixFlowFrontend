import React, { Component } from 'react'
import { assetsImages } from '../constants/images'
import Slider from '../component/Slider'
import Customdropdown from '../component/Customdropdown';
import Performbar from '../component/Performbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Doughnetchart from '../component/Doughnetchart';
import Totalbalancechart from '../component/Totalbalancechart';
import Mynftdropdown from '../component/Mynftdropdown';
import Song from '../component/Song';




class Mydashboard extends Component {
    render() {
        return (
            <div className="dashboard-wrapper-main">
                <div className="heading">My dashboard</div>
                <div className="first-row-main-dash">
                        <div className="left-col">
                            <div className="above-row">
                                <div className="inner-row">
                                    <div className="card-heading">Artist Performance</div>
                                    <a href="#"><img src={assetsImages.filter}/></a>
                                </div>
                                <Slider />
                            </div>
                            <div className="below-row">
                                <div className="date-row-main">
                                    <div className="left-pricing">
                                        <div className="price-tag"> <span>$</span> 1,357</div>
                                        <div className="short-des">+18% last month</div>
                                    </div>
                                    <div className="right-side">
                                            <div className="custom-drop">
                                                 <Customdropdown />
                                            </div>
                                            <div className="labal"> This Month</div>
                                    </div>
                                </div>
                                <Performbar />
                                <div className="progress-bar-cust">
                                    <ProgressBar now={60} />
                                </div>
                                <div className="spiner-bar-row">
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={50} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                73%
                                                <span className="small-heading">Artist Tokens</span>
                                            </div>
                                    </div>
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={50} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                27%
                                                <span className="small-heading">Artist Tokens</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="right-col">
                            <div className="inner-row">
                                    <div className="card-heading">My Artist Holdings</div>
                                    <a href="#"><img src={assetsImages.filter}/></a>
                            </div>
                            <div className="chart-row">
                                    <Doughnetchart />
                            </div>
                            <div className="comman-div-for-pro">
                                <div className="spiner-bar-row">
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={30} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                63%
                                                <span className="small-heading">Drake</span>
                                            </div>
                                    </div>
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={30} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                16%
                                                <span className="small-heading">Eminem</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="spiner-bar-row">
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={30} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                07%
                                                <span className="small-heading">Jay - Z</span>
                                            </div>
                                    </div>
                                    <div className="comman-col">
                                            <div className="spinner">
                                            <CircularProgress variant="determinate" size={30} thickness={5} value={100}/>
                                            </div>
                                            <div className="right-side-value">
                                                14%
                                                <span className="small-heading">Taylor Swift</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last-row-pricing">
                                    <div className="comman-priced">
                                        $13,555
                                        <span className="small-heading">Total Artist Balance</span>
                                    </div>
                                    <div className="comman-priced">
                                        $3,981
                                        <span className="small-heading">Total Token Balance</span>
                                    </div>
                            </div>

                        </div>

                </div>
                {/* ---------------Total-wallet-balance-------- */}
                <div className="Second-row-wave-chart">
                        <div className="total-balance-row">
                            <div className="heading-cols">
                                <div className="card-heading">Total Wallet Balance</div>
                                <div className="dollor-price"><span>$</span> 5, 109</div>
                                <div className="small-heading">+8  last week</div>
                            </div>
                            <div className="btn-filter">
                                <a href="#">
                                    <img src={assetsImages.filter}/>
                                </a>
                            </div>

                        </div>
                        <div className="total-bal-chart">
                                <Totalbalancechart />
                        </div>
                        <div className="deposite-earning-row">
                            <div className="deposits">
                                <div className="square-lab"></div>
                                <div className="deposite-heaing">
                                    <span className="labal-heading">Deposits</span>
                                    <span className="percent">+11.7%</span>
                                </div>
                            </div>
                            <div className="earning">
                                <div className="square-lab"></div>
                                <div className="deposite-heaing">
                                    <span className="labal-heading">Earnings</span>
                                    <span className="percent">+11.7%</span>
                                </div>
                            </div>

                        </div>

                </div>

                {/* -----------My-NFTs----------------------- */}

                <div className="mynfts-row-main">
                        <div className="second-col">
                            <Mynftdropdown />
                        </div>
                        <div className="center-col">
                            <input placeholder="Search for an NFT..." />
                        </div>
                        <div className="last-icon">
                            <a href="#">
                                <img src={assetsImages.filter} />
                            </a>
                        </div>
                </div>
                <div className="songs-grid-main">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                </div>


            </div>
        )
    }
}
export default Mydashboard
