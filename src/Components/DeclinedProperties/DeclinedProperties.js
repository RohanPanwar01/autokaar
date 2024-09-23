import React, { useState, useEffect } from 'react';
import "./DeclinedProperties.css";
import UserEditComponents from '../UserEditComponents/UserEditComponents';

function DeclinedProperties() {
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/rejected-properties');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setUserRows(data); // Assuming your API returns an array of user data
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserRows([]); // Setting userRows to an empty array or some default value
    }
  };

  const handleEdit = (userId) => {
    const user = userRows.find((user) => user.id === userId);
    setUserToEdit(user);
    setShowUserEdit(true);
  };

  const closeUserEdit = () => {
    setShowUserEdit(false);
  };

  return (
    <div className="DeclinedPropertiescontainer">
      <div>
        <div style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "30px", marginTop: "30px" }}>
          <span>Declined Properties</span>
        </div>

        <table className='DeclinedProperties-Table'>
          <thead>
            <tr className='DeclinedPropertiestr'>
              <th className='DeclinedPropertiesTH'>S.No</th>
              <th className='DeclinedPropertiesTH'>Property Name</th>
              <th className='DeclinedPropertiesTH'>Country</th>
              <th className='DeclinedPropertiesTH'>Phone</th>
              <th className='DeclinedPropertiesTH'>Status</th>
            </tr>
          </thead>
          <tbody>
            {userRows.map((user,index) => (
              <tr key={index}>
                <td className='DeclinedPropertiesTH'>{index+1}</td>
                <td className='DeclinedPropertiesTH'>{user.property_name}</td>
                <td className='DeclinedPropertiesTH'>{user.country}</td>
                <td className='DeclinedPropertiesTH'>{user.phone}</td>
                <td className='DeclinedPropertiesTH'>
                  {user.Status}
                  <td className='DeclinedPropertiesbutton' style={{display:'flex'}}>
                    <button 
                      style={{ color: "red" }} 
                      // onClick={() => setComponent_name('UserEditComponents')}
                      title="Declined"
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                    <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)} title='Edit'>
                      <i className="bi bi-pen"></i>
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUserEdit && (
          <div className="DeclinedUserEditContainer">
            <UserEditComponents user={userToEdit} onClose={closeUserEdit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default DeclinedProperties;
