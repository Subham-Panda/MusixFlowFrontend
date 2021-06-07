import React, { Component } from "react"
import Labelscompo from "../component/Labelscompo"
import { Link } from 'react-router-dom';

class Labels extends Component {
    render(){
        return(
            <div class="dashboard-wrapper-main labels-mains">
                 <div className="heading">Labels</div>
                 
                 <div className="inner-row-labels-main">
                        <div className="small-row-heading">
                            <div className="small-headings">Labels</div>
                            <div className="short-descriptions">Lorem Ipsum Lorem Ipsum Lorem Ipsum</div>
                        </div>

                        <div className="labels-grid-main">
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>
                        <Link to={'/rocnations'}> <Labelscompo /></Link>

                        </div>

                 </div>
            
            </div>
        )
    }
}

export default Labels