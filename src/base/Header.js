import React, { Component } from 'react';
import './base.css';
import Search from '../component/Search';
import Notification from '../component/Notification';
import Profiledropdown from '../component/Profiledropdown';

class Header extends Component{
    render() {
        return (
          <div className="header-main">
                <div className="left-col-main">
                    <Search />
                </div>
                <div className="right-col-main">
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



export default Header