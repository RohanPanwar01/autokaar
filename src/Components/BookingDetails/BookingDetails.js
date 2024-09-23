import React from 'react'
import "./BookingDetails.css"
import { useState } from 'react';
import UserEditComponents from '../UserEditComponents/UserEditComponents';

function BookingDetails() {
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
    const [component_name, setComponent_name] = useState();
  const [userRows, setUserRows] = useState([
    { id: '1', name: 'Alfreds ', phone: 'Maria Anders', email: 'indore@gmail.com', Arrive: 'Jan. 24,',Depart: 'Jan. 24',RoomType: 'Jan. 24',Payment: 'Jan. 24', Action: '' },
    
    // Add more user data as needed
  ]);

  const handleDelete = (userId) => {
    // Implement delete logic here
    const updatedUsers = userRows.filter((user) => user.id !== userId);
    setUserRows(updatedUsers);

      // Show success message
      setDeleteMessageVisible(true);

      setTimeout(() => {
        setDeleteMessageVisible(false);
      }, 3000);
    
  
  };
  const handleEdit = (userId) => {
    // Find the user to edit based on the userId
    const user = userRows.find((user) => user.id === userId);
    setUserToEdit(user);
    setShowUserEdit(true);
  };
  const closeUserEdit = () => {
    setShowUserEdit(false);
  };
  return (
   
        <div className="BookingDetailscontainer">

<div style={{ position: 'relative' }}>
      {/* Your component content here */}
      {deleteMessageVisible && (
        <div
          style={{
            position: 'fixed',
            top: '25%',
            left: '67%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            color: 'red',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 15px red',
          }}
        >
          Declined successfully!
        </div>
      )}



          <div>
            <div style={{marginLeft:"20px",fontWeight:"bold",fontSize:"30px",marginTop:"30px"}}>
            <span >Booking Details</span>
           
           
          
            {/* <button style={{marginLeft:"55.5%",justifyContent:"flex-end",alignItems:"flex-end",backgroundColor:"#f15a29",padding:"0px 20px",borderRadius:"10px",fontSize:"27px",border:"none"}} type="button">Add New</button> */}
            
            </div>
           
           
           
            
            <table className='BookingDetails-Table'>
              <thead>
                <tr className='BookingDetailstr'>
                  <th className='BookingDetailsTH'>id</th>
                  <th className='BookingDetailsTH'>name</th>
                  <th className='BookingDetailsTH'>email</th>
                  <th className='BookingDetailsTH'>Arrive</th>
                  <th className='BookingDetailsTH'>Depart</th>
                  <th className='BookingDetailsTH'>Room Type</th>
                  <th className='BookingDetailsTH'>Payment</th>
                  <th className='BookingDetailsTH'>Action</th>
                </tr>
              </thead>
              <tbody>
                {userRows.map((user) => (
                  <tr key={user.id}>
                    <td className='BookingDetailsTH'>{user.id}</td>
                    <td className='BookingDetailsTH'>{user.name}</td>
                    <td className='BookingDetailsTH'>{user.email}</td>
                    <td className='BookingDetailsTH'>{user.Arrive}</td>
                    <td className='BookingDetailsTH'>{user.Depart}</td>
                  
                    <td className='BookingDetailsTH'>{user.RoomType}</td>
                    <td className='BookingDetailsTH'>{user.Payment}</td>
                    <td className='BookingDetailsTH'>{user.Action}
                      <td className='BookingDetailsbutton' style={{display:'flex'}}>
                      <button style={{ color: "darkblue",border:"none",background:"none" }} onClick={() => handleEdit(user.id)} title='Edit'>
                  <i class="bi bi-pen" >
                    {/* ... your existing SVG code */}
                  </i>
                </button>
                        <button style={{ color: "red",border:"none",background:"none" }} onClick={() => handleDelete(user.id)}>
                        <i class="bi bi-trash"aria-hidden="true" ></i>
                        </button>
                      </td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* {showUserEdit && (
        <div className="BookingDetailsEditContainer">
          <UserEditComponents user={userToEdit} onClose={closeUserEdit} />
        </div>
      )} */}
          </div>
          {/* <div style={{ marginLeft: "22%", width: "70%", backgroundColor: "rebeccapurple", marginTop: "10px" }}>
            {component_name === 'UserEditComponents' ? <UserEditComponents /> : null}
          </div> */}
        </div>
        </div>
      );
    }
    
    
   



 

export default BookingDetails