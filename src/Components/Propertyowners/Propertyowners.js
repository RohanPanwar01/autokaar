import React, { useState, useEffect } from 'react';
import "./Propertyowners.css";
import UserEditComponents from '../UserEditComponents/UserEditComponents';

function Propertyowners() {
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
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
      
      // Filter users to only include those with at least one property in their propertylist
      const filteredData = data.filter(user => user.property_list && user.property_list.length > 0);
      console.log('filterdata',filteredData)
      setUserRows(filteredData); // Assuming your API returns an array of user data
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserRows([]); // Setting userRows to an empty array or some default value
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/owner/all-users/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.json();
      if (result.success) {
        const updatedUsers = userRows.filter((user) => user.id !== userId);
        setUserRows(updatedUsers);

        setDeleteMessageVisible(true);
        setTimeout(() => {
          setDeleteMessageVisible(false);
        }, 3000);
      } else {
        console.error('Error deleting user:', result.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
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
    <div className="Propertyownerscontainer">
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
            <span>Property Owners</span>
          </div>

          <table className='Propertyowners-Table'>
            <thead>
              <tr className='Propertyownerstr'>
                <th className='PropertyownersTH'>S.No</th>
                <th className='PropertyownersTH'>Name</th>
                <th className='PropertyownersTH'>Email</th>
                <th className='PropertyownersTH'>Country</th>
                <th className='PropertyownersTH'>Action</th>
              </tr>
            </thead>
            <tbody>
              {userRows.map((user,index) => (
                <tr key={index}>
                  <td className='PropertyownersTH'>{index+1}</td>
                  <td className='PropertyownersTH'>{user.first_name}</td>
                  <td className='PropertyownersTH'>{user.email}</td>
                  <td className='PropertyownersTH'>{user.country}</td>
                  <td className='PropertyownersTH' style={{display:'flex'}}>
                    
                    <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)}>
                      <i className="bi bi-pen"></i>
                    </button>
                    <button style={{ color: "red" }} onClick={() => handleDelete(user.id)} title='Delete'>
                      <i className="bi bi-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          

          {showUserEdit && (
            <div className="PropertyUserEditContainer">
              <UserEditComponents user={userToEdit} onClose={closeUserEdit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Propertyowners;
