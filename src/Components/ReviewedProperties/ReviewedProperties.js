import React, { useState, useEffect } from 'react';
import "./ReviewedProperties.css";
import UserEditComponents from '../UserEditComponents/UserEditComponents';

function ReviewedProperties() {
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/accepted-properties');
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
    <div className="ReviewedPropertiescontainer">
      <div>
        <div style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "30px", marginTop: "30px" }}>
          <span>Reviewed Properties</span>
        </div>

        <table className='ReviewedProperties-Table'>
          <thead>
            <tr className='ReviewedPropertiestr'>
            <th className='ReviewedPropertiesTH'>S.No</th>
              <th className='ReviewedPropertiesTH'>Name</th>
              <th className='ReviewedPropertiesTH'>Price</th>
              <th className='ReviewedPropertiesTH'>Country</th>
              <th className='ReviewedPropertiesTH'>Guest_cout</th>
              <th className='ReviewedPropertiesTH'>Status</th>
            </tr>
          </thead>
          <tbody>
            {userRows.map((user,index) => (
              <tr key={index}>
                <td className='ReviewedPropertiesTH'>{index+1}</td>
                <td className='ReviewedPropertiesTH'>{user.property_name}</td>
                <td className='ReviewedPropertiesTH'>{user.price_per_night}</td>
                <td className='ReviewedPropertiesTH'>{user.country}</td>
                <td className='ReviewedPropertiesTH'>{user.guest_count}</td>
                <td className='ReviewedPropertiesTH'>
                  {user.Status}
                  <td className='ReviewedPropertiesbutton' style={{display:'flex'}}>
                  <button style={{ color: "red" }} 
                  // onClick={() =>  // handleDelete(user.id)} title="Declined"
                    >
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)}>
                      <i className="bi bi-pen"></i>
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showUserEdit && (
          <div className="ReviewedEditContainer">
            <UserEditComponents user={userToEdit} onClose={closeUserEdit} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewedProperties;
