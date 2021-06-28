import React, { Component } from "react"
import { assetsImages } from "../constants/images"

class Labelscompo extends Component {
    render(){
        return(
            <div className="labels-cards-main">
                <div className="imgs-row-main">
                    <img src={assetsImages.artist} />
                </div>
                <div className="name-plate">
                    <div className="names-of-artis">Mike Posner</div>
                    <div className="new-things-happen">I took a pill </div>
                </div>

            </div>
        )
    }
}

export default Labelscompo