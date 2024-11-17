import React from 'react';
import { NavLink } from "react-router-dom";
import Img from "../img/image 2.png"
import { Badge } from '@mui/material';

const Layout = ({dataLength}) => {
    return (
        <div>   
          <header id="header">
               <div className="container">
                  <div className="header">
                      <div>
                        <img src= {Img} alt= "Img"/>
                      </div>
                      <div className='Navlink'>
                        <NavLink  to="/">Menu</NavLink>
                        <NavLink to="/order">

                        <Badge badgeContent={dataLength} color="primary">
                            <p>Order</p>
                        </Badge>
                       
                        </NavLink>

                        <NavLink to="/admin">Admin</NavLink>
                      </div>
                  </div>
               </div>
          </header>

        </div>
    );
};

export default Layout;