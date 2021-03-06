import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import './component.css';
import { assetsImages } from "../constants/images";
// import Customdropdown from "./Customdropdown";
import Performbar from "./Performbar";
// import ProgressBar from "react-bootstrap/ProgressBar";
import { Modal } from "react-bootstrap";
// import Loader from "./Loader";
import { Inflow } from '../inflow-solidity-sdk/src/Inflow';
import { ethers } from 'ethers';
import SmallLoader from "./SmallLoader";

const GET_TOKEN_FEES = gql`
    query {
        minteds{
            royaltyPaid
        }
    }
`;

const Artistpic = () => {

    // const [profileModel, setProfileModel] = useState(false);
    const [tokenfrees, settokenfrees] = useState(false);
    const [newvote, setnewvote] = useState(false);
    const [success, setsuccess] = useState(false);


    const { loading, data } = useQuery(GET_TOKEN_FEES);
    const [tokenfees, settokenfees] = useState(0.0);


    useEffect(() => {
        if (data) {
            let tokenfees = 0;
            data.minteds.forEach(item => {
                tokenfees += item.royaltyPaid;
            })
            formatAndSetTokenFees(tokenfees);
        }
    }, [data]);

    const formatAndSetTokenFees = async (value) => {
        const provider = new ethers.providers.Web3Provider(
            window.ethereum
        );
        const inflow = new Inflow(provider, 80001);
        const tokenfees = inflow.formatERC20('USDC', String(value))
        // console.log({tokenfees})
        settokenfees(tokenfees);
    }

    return (
        <div className="dashboard-wrapper-main artist-management">
            <div className="heading">Artist Management</div>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>

                    <div className='card'>
                        <div className='artist-title'>
                            <span>Token Fees</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>
                        <div className='artist-poll'>
                            <div className='poll-green'>
                                <img alt="" src={assetsImages.arrowup} />
                                + 3.10%
                            </div>
                            <div className='dropdown'>

                            </div>
                            <div className='amount d-flex justify-content-center align-items-center text-wrap' style={{ wordWrap: "break-word" }}>
                                {
                                    loading ?
                                        <SmallLoader />
                                        :
                                        tokenfees
                                }
                            </div>
                        </div>
                        <div className="first-row-main-dash">
                            <div className="left-col">
                                <div className="below-row">
                                    <Performbar />
                                </div>
                            </div>
                        </div>
                        <div className='footer-btn'>
                            <button className='btn-gradiant' onClick={() => settokenfrees(tokenfrees => !tokenfrees)}>
                                Cash Out
                            </button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mt-4 mt-md-0'>
                    <div className='card'>
                        <div className='artist-title'>
                            <span>Royalties</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>
                        <div className='artist-poll'>
                            <div className='poll-green'>
                                <img alt="" src={assetsImages.arrowup} />
                                + 1.57%
                            </div>
                            <div className='dropdown'>

                            </div>
                            <div className='amount'>
                                $1,000,000
                            </div>
                        </div>
                        <div className="first-row-main-dash">
                            <div className="left-col">
                                <div className="below-row">
                                    <Performbar />
                                </div>
                            </div>
                        </div>
                        <div className='footer-btn'>
                            <button className='btn-gradiant'>
                                Manage Royalties
                            </button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mt-4 mt-lg-0'>
                    <div className='card'>
                        <div className='artist-title'>
                            <span>Top Fans</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>
                        <div className='fans-list'>
                            <ul>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='fan-profile'>
                                        <img alt="" src={assetsImages.artist} />
                                    </div>
                                    <div className='fan-details'>
                                        <div className='fan-details-content'>
                                            <span className='name'>Bob Smith</span>
                                            <span className='content'>
                                                0xc8F595E2084DB48480...
                                            </span>
                                        </div>
                                        <div className='donate-amount'>
                                            1,500 INF
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <button className='see-all-btn'>
                                See More
                            </button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mt-4'>
                    <div className='card button-card'>
                        <div className='artist-title'>
                            <span>Drop NFT</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>

                        <div className='footer-btn'>
                            <button className='btn-gradiant'>
                                Single
                            </button>
                            <button className='btn-gradiant'>
                                Multiple
                            </button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mt-4'>
                    <div className='card button-card'>
                        <div className='artist-title'>
                            <span>New Proposal</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>

                        <div className='footer-btn'>
                            <button className='btn-gradiant' type='button' onClick={() => setnewvote(newvote => !newvote)}>
                                Create Vote
                            </button>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 mt-4'>
                    <div className='card button-card'>
                        <div className='artist-title'>
                            <span>Private Links</span>
                            <a href="#"><img alt="" src={assetsImages.filter} /></a>
                        </div>
                        <div className='footer-btn'>
                            <button className='btn-gradiant'>
                                Create URL
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={newvote} className="edit-profile-modal newvote" onHide={() => setnewvote(newvote => !newvote)}>
                <Modal.Header closeButton>
                    <span className='title'>
                        New Vote
                    </span>
                </Modal.Header>

                <Modal.Body>
                    <div className='form-group'>
                        <label>Location</label>
                        <input className='form-control mb-3' type='text' placeholder='Address' />
                        <input className='form-control mb-3' type='text' placeholder='Option 1' />
                        <input className='form-control mb-3' type='text' placeholder='Option 2' />
                        <input className='form-control mb-3' type='text' placeholder='Option 3' />
                        <input className='form-control mb-3' type='text' placeholder='Option 4' />
                        <button className='upload-profile btn-gradiant' >
                            +
                        </button>
                    </div>

                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='End Date' />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button className='save-btn btn-gradiant' onClick={() => setsuccess(success => !success)}>
                        Launch Poll
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal show={tokenfrees} className="edit-profile-modal sell" onHide={() => settokenfrees(tokenfrees => !tokenfrees)}>
                <Modal.Header closeButton>
                    <span className='title'>
                        Token Fees
                    </span>
                </Modal.Header>

                <Modal.Body>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='Amount' />
                    </div>

                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='Wallet address' />
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <button className='save-btn btn-gradiant'>
                        Cash Out
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal show={success} className="edit-profile-modal success" onClick={() => setsuccess(success => !success)}>
                <Modal.Header closeButton>
                    <span className='title'>
                        Location of next concert
                    </span>
                </Modal.Header>

                <Modal.Body>
                    <div className='success-popup-content'>
                        <img alt="" src={assetsImages.success} />
                        <h2 className='title'>
                            Success!
                        </h2>
                        <p>Your poll has been created and is now live</p>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <button className='save-btn btn-gradiant'>
                        View Poll
                    </button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Artistpic
