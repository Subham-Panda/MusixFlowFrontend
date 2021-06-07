import React, { Component } from "react";
import './component.css';
import { assetsImages } from "../constants/images";

class Artistpic extends Component {
    render(){
        return(
            <div className="artist-main">
                <div className="artis-img">
                    <img src={assetsImages.artist} />
                </div>
                <div className="artist-name">
                    Mike Posner
                </div>
                <div className="short-desrip">
                    <div className="price-tag">$113.51</div>
                    <div className="tags-up">+9.1%</div>
                </div>

            </div>
        )
    }
}

export default Artistpic