import React, { Component } from 'react';
import './component.css';
import { assetsImages } from '../constants/images';

class Notification extends Component{
    render() {
        return (
          <div className="Notification-main">
            <img src={assetsImages.bell} />   
            <span className="badge-name">3</span>
          </div>
        )
    }
}



export default Notification