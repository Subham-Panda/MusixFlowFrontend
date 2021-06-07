import React, { Component } from "react"
import { assetsImages } from "../constants/images"

class Rocnations extends Component {
    render(){
        return(
            <div class="dashboard-wrapper-main rocnations-artist-main">
                 <div className="heading">ROCNATION's Artists</div>
                 <div className="small-descriptions">Lorem ipsums main</div>

                 <div className="gray-cards-main">
                    <div className="inner-first-card-row">
                            <img src={assetsImages.artist} width='80'/>
                            <div className="col-rights-main">
                                <div className="first-headings">Mike Posner</div>
                                <div className="songs-name">Lorem Ipsum</div>
                            </div>

                    </div>
                    <div className="table-main">
                        <table>
                            <thead>
                                <tr>
                                    <th className="first-col"></th>
                                    <th className="second-col">Name</th>
                                    <th className="third-col">Lorem Name</th>
                                    <th className="fourth-col">Lorem Name</th>
                                    <th className="fifth-col">NFTs</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td className="first-col"><img src={assetsImages.artist}/> </td>
                                        <td className="second-col">Mike Posner</td>
                                        <td className="third-col">Lorem ipsum</td>
                                        <td className="fourth-col">Lorem ipsum</td>
                                        <td className="fifth-col">100</td>
                                    </tr>
                                    <tr>
                                        <td className="first-col"><img src={assetsImages.artist}/> </td>
                                        <td className="second-col">Mike Posner</td>
                                        <td className="third-col">Lorem ipsum</td>
                                        <td className="fourth-col">Lorem ipsum</td>
                                        <td className="fifth-col">100</td>
                                    </tr>


                            </tbody>


                        </table>

                    </div>


                 </div>

            </div>
        )
    }
}

export default Rocnations