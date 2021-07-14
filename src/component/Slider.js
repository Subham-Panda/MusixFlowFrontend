import React, { Component } from 'react';
import './component.css';
import { assetsImages } from '../constants/images';

class Slider extends Component {
    render() {
        return (
            <div className="new-slider-main">
                <div className="slider">
                    <input type="radio" name="testimonial" id="t-2" />
                    <input type="radio" name="testimonial" id="t-3" checked onChange={() => null} />
                    <input type="radio" name="testimonial" id="t-4" />

                    <div className="testimonials">
                        <label className="item" htmlFor="t-1">
                            <img alt="" src={assetsImages.person} alt="picture" />
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

                        <label className="item" htmlFor="t-2">
                            <img alt="" src={assetsImages.person} alt="picture" />
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
                        <label className="item" htmlFor="t-3">
                            <img alt="" src={assetsImages.person} alt="picture" />
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
                        <label className="item" htmlFor="t-4">
                            <img alt="" src={assetsImages.person} alt="picture" />
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
                        <label className="item" htmlFor="t-5">
                            <img alt="" src={assetsImages.person} alt="picture" />
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

                        <label htmlFor="t-2" />
                        <label htmlFor="t-3" />
                        <label htmlFor="t-4" />

                    </div>
                </div>

            </div>
        )
    }
}



export default Slider

