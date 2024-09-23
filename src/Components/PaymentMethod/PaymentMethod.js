import React from 'react';
import './PaymentMethod.css';
import { useState } from 'react';
// import UserEditComponents from '../UserEditComponents/UserEditComponents';

function PaymentMethod() {
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
  const [showUserEdit, setShowUserEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userRows, setUserRows] = useState([
    { id: '1', name: 'Alfreds ', phone: 'Maria Anders', email: 'indore@gmail.com',CardDetails:'0123450254552', PaymentStatus: 'Paid', Action: '' },
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
    <div className="PaymentMethodcontainer">
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
          <div style={{ marginLeft: "20px", fontWeight: "bold", fontSize: "30px", marginTop: "30px" }}>
            <span>Payment Method</span>
          </div>
          <table  className='PaymentMethod-Table'>
            <thead >
              <tr   className='PaymentMethodtr'>
                <th   className='PaymentMethodTH'>id</th>
                <th className='PaymentMethodTH'>name</th>
                <th className='PaymentMethodTH'>Mobile</th>
                <th className='PaymentMethodTH'>email</th>
                <th className='PaymentMethodTH'>Card Details</th>
                
                <th className='PaymentMethodTH'>Payment Status</th>
                <th className='PaymentMethodTH'>Action</th>
              </tr>
            </thead>
            <tbody>
              {userRows.map((user) => (
                <tr  key={user.id}>
                  <td className='PaymentMethodTH'>{user.id}</td>
                  <td className='PaymentMethodTH'>{user.name}</td>
                  <td className='PaymentMethodTH'>{user.phone}</td>
                  <td className='PaymentMethodTH'>{user.email}</td>
                  <td className='PaymentMethodTH'>
      {user.CardDetails && user.CardDetails.length >= 4 ? `**** **** **** ${user.CardDetails.slice(-4)}` : user.CardDetails}
    </td>
                 
                  <td className='PaymentMethodTH' style={{ color: user.PaymentStatus === 'Paid' ? 'green' : 'orange' }}>
  {user.PaymentStatus}
</td>
                  <td className='PaymentMethodTH'>
                    {user.Action}
                    <td className='PaymentMethodbutton' style={{display:'flex'}}>
                      <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)} title='Edit'>
                        <i class="bi bi-pen"></i>
                      </button>
                      <button style={{ color: "red" }} onClick={() => handleDelete(user.id)}>
                        <i class="bi bi-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;

