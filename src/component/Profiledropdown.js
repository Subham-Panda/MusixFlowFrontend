import React, { Component } from 'react';
import './component.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { assetsImages } from '../constants/images';
import { logout } from '../store/reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from "react-router-dom";

function Profiledropdown() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    const onLogin = () => {
        window.location.href = "/login";
    }

    const onEdit = () => {
        window.location.href = "/accountsettings";
    }

    const onLogout = () => {
        dispatch(logout())
        window.location.href = "/login";
    }

    return (
        <div className="Dropdown-main-header">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-1">
                    <img src={assetsImages.person} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="super-colors profile-dropdown-main">
                    {/*<Dropdown.Item eventKey="1">Action</Dropdown.Item>*/}
                    {/*<Dropdown.Item eventKey="2">Another action</Dropdown.Item>*/}
                    {/*<Dropdown.Item eventKey="3" onClick={()=> dispatch(logout())} active>*/}
                    {/*    Logout*/}
                    {/*</Dropdown.Item>*/}
                    <div className="profile-dropdown-card">
                        <div className="card-header">
                            {/* <span className='close'>X</span> */}
                        </div>

                        <div className="Profile-dropdown-img">
                            <div className="background-img-wrapper">
                                <img src={assetsImages.background} />
                                <div className="img-wrapper">
                                    <div className="full-scree-icon">
                                        <img src={assetsImages.fullscreen} />
                                    </div>
                                    <div className="profile-img">
                                        <img src={assetsImages.person} />
                                    </div>
                                    <div className="money-icon">
                                        <img src={assetsImages.money} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="user-details">
                            <div className="user-name">Lola Kipp</div>
                            <div className="user-album">Chicago, IL</div>
                            {token === "" ? (
                                <button className="edit-button" onClick={onLogin} >Login</button>
                            ) : (
                                <div className="d-flex justify-content-around">
                                    <button className="edit-button" onClick={ onEdit } >
                                        Edit
                                    </button>
                                    <button className="edit-button" onClick={ onLogout } >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="user-profile-details">
                            <ul>
                                <li>
                                    <div className="number">53</div>
                                    <span className="name">Following</span>
                                </li>
                                <li>
                                    <div className="number">78</div>
                                    <span className="name">NFTs</span>
                                </li>
                                <li>
                                    <div className="number">$78.5</div>
                                    <span className="name">New Worth</span>
                                </li>
                            </ul>
                        </div>

                        <div className="profile-card-body">
                            <div className="card-body-title">Following</div>
                            <ul className="following-list">
                                <li>
                                    <div className="user">
                                        <img src={assetsImages.person} />
                                    </div>
                                    <div className="follower-details">
                                        <div className="follower-content">
                                            <span className="album-name">
                                                Meg Thee
                                            </span>
                                            <span className="album-id">
                                                0x385f947276749Ce646f60x385f947276749Ce646f6
                                            </span>
                                        </div>
                                        <button className="option-btn">
                                            <img src={assetsImages.options} />
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="user">
                                        <img src={assetsImages.person} />
                                    </div>
                                    <div className="follower-details">
                                        <div className="follower-content">
                                            <span className="album-name">
                                                Meg Thee
                                            </span>
                                            <span className="album-id">
                                                0x385f947276749Ce646f60x385f947276749Ce646f6
                                            </span>
                                        </div>
                                        <button className="option-btn">
                                            <img src={assetsImages.options} />
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="user">
                                        <img src={assetsImages.person} />
                                    </div>
                                    <div className="follower-details">
                                        <div className="follower-content">
                                            <span className="album-name">
                                                Meg Thee
                                            </span>
                                            <span className="album-id">
                                                0x385f947276749Ce646f60x385f947276749Ce646f6
                                            </span>
                                        </div>
                                        <button className="option-btn">
                                            <img src={assetsImages.options} />
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="user">
                                        <img src={assetsImages.person} />
                                    </div>
                                    <div className="follower-details">
                                        <div className="follower-content">
                                            <span className="album-name">
                                                Meg Thee
                                            </span>
                                            <span className="album-id">
                                                0x385f947276749Ce646f60x385f947276749Ce646f6
                                            </span>
                                        </div>
                                        <button className="option-btn">
                                            <img src={assetsImages.options} />
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Profiledropdown;
