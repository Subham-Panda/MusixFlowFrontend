import React, { Component } from "react"
import Tabs from 'react-bootstrap/Tabs'
import Dropdown from 'react-bootstrap/Dropdown';
import TabContainer from 'react-bootstrap/TabContainer'
class Accountsettings extends Component {
    render(){
        return(
            <div class="dashboard-wrapper-main">
                <div className="heading">Account settings</div>
                <div className="tab-settings-main">

                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">General Settings</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Accounts</a>
                            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Socials</a>
                            <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Activites</a>
                            <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Personalization</a>
                            <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Other</a>
                        </div>
                    </nav>
                    <div class="tab-content pt-3" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="account-setting-form">
                                <div className="grids-main-inputs">
                                    <div className="comman-grids">
                                        <input placeholder="First Name" />
                                    </div>
                                    <div className="comman-grids">
                                        <input placeholder="Last Name" />
                                    </div>
                                    <div className="comman-grids">
                                        <input placeholder="City" />
                                    </div>
                                    <div className="comman-grids">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-custom-1">
                                              Country
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors">
                                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="comman-grids Address-main">
                                        <input placeholder="Address" />
                                    </div>
                                    <div className="comman-grids">
                                        <input placeholder="Postcode/ZIP                " />
                                    </div>
                                    <div className="comman-grids">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-custom-1">
                                                Currency
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="super-colors">
                                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>


                                </div>
                                <div className="save-changes-main">
                                    <button>Save Changes</button>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                        </div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                        </div>
                        <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accountsettings
