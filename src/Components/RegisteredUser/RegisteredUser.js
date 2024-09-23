import React, { useState, useEffect } from 'react';
import "./RegisteredUser.css";
import UserEditComponents from '../UserEditComponents/UserEditComponents';

function RegisteredUser() {
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/all-users');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log('Fetched data:', data);

      // Filter users to only include those with an empty propertylist
      const filteredData = data.filter(user => !user.property_list || user.property_list.length === 0);
console.log('filterdata',filteredData)
      setUserRows(filteredData); // Assuming your API returns an array of user data
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserRows([]); // Setting userRows to an empty array or some default value
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://sher9522.caribbeaneaze.com/api/owner/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      const updatedUsers = userRows.filter((user) => user.id !== userId);
      setUserRows(updatedUsers);

      // Show success message
      setDeleteMessageVisible(true);
      setTimeout(() => {
        setDeleteMessageVisible(false);
      }, 2000);
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error display or logging
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
    <div className="RegisteredUsercontainer">
      <div style={{ position: 'relative' }}>
        {deleteMessageVisible && (
          <div
            style={{
              position: 'fixed',
              top: '26%',
              left: '67%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              color: 'red',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0px 0px 15px red',
            }}
          >
            Delete successfully!
          </div>
        )}

        <div>
          <div style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "30px", marginTop: "30px" }}>
            <span>Registered User</span>
          </div>

          <table className='RegisteredUser-Table'>
            <thead>
              <tr className='RegisteredUsertr'>
                <th className='RegisteredUserTH'>S.No</th>
                <th className='RegisteredUserTH'>Name</th>
                <th className='RegisteredUserTH'>Email</th>
                <th className='RegisteredUserTH'>Joined</th>
                <th className='RegisteredUserTH'>Action</th>
              </tr>
            </thead>
            <tbody>
              {userRows.map((user,index) => (
                <tr key={index}>
                  <td className='RegisteredUserTH'>{index+1}</td>
                  <td className='RegisteredUserTH'>{user.first_name} {user.last_name}</td>
                  <td className='RegisteredUserTH'>{user.email}</td>
                  <td className='RegisteredUserTH'>{user.date}</td>

                  <td className='RegisteredUserTH'>
                    <div className='RegisteredUserbutton' style={{display:'flex'}}>
                      <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)} title='Edit'>
                        <i className="bi bi-pen"></i>
                      </button>
                      <button style={{ color: "red" }} onClick={() => handleDelete(user.id)} title='Delete'>
                        <i className="bi bi-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showUserEdit && (
            <div className="RegisteredUserEditContainer">
              <UserEditComponents user={userToEdit} onClose={closeUserEdit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisteredUser;
