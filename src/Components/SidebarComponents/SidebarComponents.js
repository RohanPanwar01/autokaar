import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarComponents.css';
// import HeaderComponents from '../HeaderComponents/HeaderComponents';
import Cursor from '../Cursor/Cursor';



function SidebarComponents({ sidebarOpen } ) {
  const[highliter_tab,setHighliter_tab] = useState();
  const [submenuVisibility, setSubmenuVisibility] = useState([]);

  const toggleSubMenu = (index) => {
    const updatedVisibility = [...submenuVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setSubmenuVisibility(updatedVisibility);
  };

  const menuItems = [
    // { icon: 'fas fa-tachometer-alt', text: 'Dashboard', to: '/MainComponents' },
    { divider: true },

	{
		icon:  'fas fa-home',
		text: 'Listed Property  ',
		submenu: [
		  { text: 'Properties Under Review', to: '/PropertiesUnderReview' },
		  { text: 'Reviewed Properties', to: '/ReviewedProperties' },
		  { text: 'Declined Properties', to: '/DeclinedProperties' },
		  // { text: 'booking', to: '/' },
		  // Add more submenu items as needed
		],
	  },

    {
      icon: 'fas fa-suitcase',
      text: 'User details',
      submenu: [
        { text: 'Property Owners', to: '/PropertyOwners' },
        { text: 'Registered Users', to: '/RegisteredUser' },
        // { text: 'Add Booking', to: '/' },
      ],
    },

    {
      icon: 'fas fa-calendar',
      text: 'Booking',
      submenu: [
        { text: 'Booking Details', to: '/BookingDetails' },
		{ text: 'Booking History', to: '/BookingHistory'},
		// { text: 'booking', to: '/' },
		// { text: 'booking', to: '/' },
        // Add more submenu items as needed
      ],
    },

    {
      icon: 'fas fa-credit-card',
      text: 'Payment Details',
      submenu: [
        { text: 'Payment Methods', to: '/PaymentMethod' },
		{ text: 'Invoice List', to: '/InvoiceList' },
		{ text: 'Invoice Details', to: '/InvoiceDetails' },
        
      ],

    },

    {
      icon: 'fas fa-headset',
      text: 'Support',
      submenu: [
		 { text: 'Queries', to: '/QuieresComponents' },
        // { text: 'User Reporting System', to: '/' },
        // { text: 'Edit Staff', to: '/' },
        // { text: 'Add Staff', to: '/' },
      ],
    },
    // {
    //   icon: 'fas fa-ban',
    //   text: 'Blocking and Banning',
    //   submenu: [
	  // ],
    // },
	// {
	// 	icon: 'fas fa-share-alt',
	// 	text: 'Moderation Dashboard',
	// 	submenu: [
	// 	],
	//   }
  ];

  return (
    <div>
     
      <div className="sidebar" id="sidebar">
         <Cursor/>
        {/* <div className="sidebar-inner slimscroll"> */}

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Cursor />
        <div className="sidebar-inner">
          <div id="sidebar-menu" className="sidebar-menu">
            <NavLink style={{color: highliter_tab === 'Dashboard'?'blue':''}}  onClick={(()=>setHighliter_tab ('Dashboard'))}     className="Dashboard bi-speedometer" to={'/'} > Dashboard</NavLink>
            <ul>
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.divider ? (
                    <li className="list-divider"></li>
                  ) : (
                    <li className={item.submenu ? 'submenu' : ''}>
                      <NavLink
                        to={item.to}
                        onClick={() => item.submenu && toggleSubMenu(index)}
                        activeClassName="active-link"
                      >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                        {item.submenu && <span className="menu-arrow"></span>}
                      </NavLink>
                      {item.submenu && (
                        <ul className="submenu_class" style={{ display: submenuVisibility[index] ? 'block' : 'none' }}>
                          {item.submenu.map((subitem, subindex) => (
                            <li onClick={() => (subitem?.text)} key={subindex}>
                              <NavLink to={subitem.to}>{subitem.text}</NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponents;