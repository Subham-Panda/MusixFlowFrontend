import React, { Component } from "react"
import Banner from "../component/Banner"
import Artistpic from "../component/Artistpic"
import Song from "../component/Song"

class Inflowmusic extends Component {
    render(){
        return(
            <div className="Inflow-music-main">
                <Banner/>
                <div className="dashboard-wrapper-main inner-music-wrapper">
                    <div className="artist-heading">Featured Artists</div>
                    <div className="grid-for-artist">
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                        <Artistpic />
                    </div>
                    <div className="see-all-artist">
                        <a href="#">See All Artists</a>
                    </div>
                    <div className="artist-heading">NFT Drops</div>
                    <div className="songs-grid-main">
                        <Song />
                        <Song />
                        <Song />
                        <Song />
                        <Song />                
                    </div>
                    <div className="see-all-artist see-all-nft">
                        <a href="#">See All NFTs</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inflowmusic
