import React, { Component } from 'react';
import './component.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { assetsImages } from '../constants/images';
import { logout } from "../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";


function Profiledropdown(){
    const dispatch = useDispatch();
        return (
          <div className="Dropdown-main-header">
              <Dropdown>
                    <Dropdown.Toggle id="dropdown-custom-1">
                        <img src={assetsImages.person} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={()=> dispatch(logout())} active>
                        Logout
                    </Dropdown.Item>
                    </Dropdown.Menu>
              </Dropdown>
          </div>
        )
}



export default Profiledropdown