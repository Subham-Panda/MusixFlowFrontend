import React, { Component, useState } from 'react';
import './base.css';
import { Link } from 'react-router-dom';
import settings from '../assets/images/settings.svg';
import { assetsImages } from '../constants/images';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const [activePage, updateActivePage] = useState('home');
    const token = useSelector((state) => state.auth.token);

    return (
        <div className="side-bar-main">
            <div className="logo-website-main">
                <Link to={'/'} className="nav-link">
                    <img src={assetsImages.logo} />
                </Link>
            </div>
            <div className="side-bar-navigation">
                <Link to={'/'}>
                    <div
                        className={
                            activePage === 'inflowmusic'
                                ? 'nav-link-main active'
                                : 'nav-link-main'
                        }
                        onClick={() => updateActivePage('inflowmusic')}
                    >
                        <img src={assetsImages.home} />
                    </div>
                </Link>
                <Link to={'/news'}>
                    <div
                        className={
                            activePage === 'demo1'
                                ? 'nav-link-main active'
                                : 'nav-link-main'
                        }
                        onClick={() => updateActivePage('demo1')}
                    >
                        <img src={assetsImages.dashboard} />
                    </div>
                </Link>
                <Link to={'/leaderboard'}>
                    <div
                        className={
                            activePage === 'demo2'
                                ? 'nav-link-main active'
                                : 'nav-link-main'
                        }
                        onClick={() => updateActivePage('demo2')}
                    >
                        <img src={assetsImages.wallet} />
                    </div>
                </Link>
                {token !== '' ? (
                    <Link to={'/accountsettings'}>
                        <div
                            className={
                                activePage === 'demo3'
                                    ? 'nav-link-main active'
                                    : 'nav-link-main'
                            }
                            onClick={() => updateActivePage('demo3')}
                        >
                            <img src={assetsImages.inventory} />
                        </div>
                    </Link>
                ) : null}
                <Link to={'/lebels'}>
                    <div
                        className={
                            activePage === 'demo4'
                                ? 'nav-link-main active'
                                : 'nav-link-main'
                        }
                        onClick={() => updateActivePage('demo4')}
                    >
                        <img src={assetsImages.calendar} />
                    </div>
                </Link>
                {token !== '' ? (
                    <Link to={'/dashboard'}>
                        <div
                            className={
                                activePage === 'demo5'
                                    ? 'nav-link-main active'
                                    : 'nav-link-main'
                            }
                            onClick={() => updateActivePage('demo5')}
                        >
                            <img src={assetsImages.orders} />
                        </div>
                    </Link>
                ) : null}

                <div
                    className={
                        activePage === 'demo6'
                            ? 'nav-link-main settings-icon active'
                            : 'nav-link-main settings-icon'
                    }
                    onClick={() => updateActivePage('demo6')}
                >
                    <img src={assetsImages.settings} />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
