import React, { Component } from 'react';
import './component.css';
import { assetsImages } from '../constants/images';

class Slider extends Component {
    render() {
        return (
            <div className="new-slider-main">
                <div className="slider">
                    <input type="radio" name="testimonial" id="t-2" />
                    <input type="radio" name="testimonial" id="t-3" checked />
                    <input type="radio" name="testimonial" id="t-4" />

                    <div className="testimonials">
                        <label className="item" For="t-1">
                            <img src={assetsImages.person} alt="picture"/>
                            <div className="information-row">
                                <div className="name-person">
                                    Drake
                                    <span className="categories">Rap</span>
                                </div>
                                <div className="name-person">
                                    $ 107.88
                                    <span className="up-down">+5.7%</span>
                                </div>

                            </div>

                        </label>

                        <label className="item" for="t-2">
                            <img src={assetsImages.person} alt="picture" />
                            <div className="information-row">
                                <div className="name-person">
                                    Drake
                                <span className="categories">Rap</span>
                                </div>
                                <div className="name-person">
                                    $ 107.88
                                <span className="up-down">+5.7%</span>
                                </div>

                            </div>

                        </label>
                        <label className="item" for="t-3">
                            <img src={assetsImages.person} alt="picture" />
                            <div className="information-row">
                                <div className="name-person">
                                    Drake
                                    <span className="categories">Rap</span>
                                </div>
                                <div className="name-person">
                                    $ 107.88
                                    <span className="up-down">+5.7%</span>
                                </div>
                            </div>

                        </label>
                        <label className="item" for="t-4">
                            <img src={assetsImages.person} alt="picture" />
                            <div className="information-row">
                                <div className="name-person">
                                    Drake
                                    <span className="categories">Rap</span>
                                </div>
                                <div className="name-person">
                                    $ 107.88
                                    <span className="up-down">+5.7%</span>
                                </div>

                            </div>
                        </label>
                        <label className="item" For="t-5">
                            <img src={assetsImages.person} alt="picture"/>
                            <div className="information-row">
                                <div className="name-person">
                                    Drake
                                    <span className="categories">Rap</span>
                                </div>
                                <div className="name-person">
                                    $ 107.88
                                    <span className="up-down">+5.7%</span>
                                </div>

                            </div>
                        </label>

                    </div>
                    <div className="dots">

                        <label for="t-2"></label>
                        <label for="t-3"></label>
                        <label for="t-4"></label>

                    </div>
                </div>

            </div>
        )
    }
}



export default Slider

