import React, { Component } from 'react';
import './component.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { assetsImages } from '../constants/images';


class Livenow extends Component{
    render() {
        return (
        
            <div className="Live-now-mains">
                <img className="live-video" src={assetsImages.artist} />
                <div className="live-nows-main">Live now</div>
                <div className="main-rows-main">
                    <div className="heading-text">Weezer</div>
                    <div className="fourth-row">
                    <div className="comman-col">
                        <img src={assetsImages.like} className="comman-icon" />
                        561 Likes
                    </div>
                    <div className="comman-col">
                        <img src={assetsImages.commnet} className="comman-icon" />
                        103 Likes
                    </div>

                    </div>
                </div>

            </div>


        )
    }
}



export default Livenow