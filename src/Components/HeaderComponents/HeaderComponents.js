import React, { useState } from 'react';
import './HeaderComponents.css';
import SidebarComponents from '../SidebarComponents/SidebarComponents'; // Corrected import statement

function HeaderComponents() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    // console.log('Sidebar is now:', !sidebarOpen ? 'Open' : 'Closed');
  };


  return (
    <div>
      <div className="header" style={{ backgroundColor: "white", border: "none" }}>
        <div className="header-left">
          <img
            className="logo1"
            style={{ height: "120px", marginLeft: "0", marginTop: "-18px" }}
            src="assets/img/CARIBBEANEAZE__2_-1-removebg-preview.png"
            alt="logo"
          />
          <a style={{ height: "200px", width: "200px" }} href="#" className="logo">
            <span className="logoclass" style={{ color: "blue" }}></span>
          </a>
        </div>
        <a className="mobile_btn" onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <i className="fas fa-bars"></i>
        </a>
        <SidebarComponents sidebarOpen={sidebarOpen} /> 
        
        <ul className="nav user-menu">
          <li className="nav-item dropdown noti-dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fe fe-bell"></i>
              <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">Clear All</a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Carlson Tech</span> has approved{' '}
                            <span className="noti-title">your estimate</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">4 mins ago</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Additional notifications */}
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown has-arrow">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img">
                <img className="rounded-circle" src="assets/img/Group.png" width="31" alt="Soeng Souy" />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img src="assets/img/Group.png" alt="User Image" className="avatar-img rounded-circle" />
                </div>
                <div className="user-text">
                  <h6>Soeng Souy</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="#">My Profile</a>
              <a className="dropdown-item" href="#">Account Settings</a>
              <a className="dropdown-item" href="#">Logout</a>
            </div>
          </li>
        </ul>
      </div>
      <SidebarComponents sidebarOpen={sidebarOpen} /> {/* Pass sidebarOpen as a prop */}
    </div>
  );
}

export default HeaderComponents;
