import React from 'react';
import './InvoiceList.css';
import { useState } from 'react';
// import UserEditComponents from '../UserEditComponents/UserEditComponents';

function InvoiceList() {
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
  // const [showUserEdit, setShowUserEdit] = useState(false);
  // const [userToEdit, setUserToEdit] = useState(null);
  const [userRows, setUserRows] = useState([
    { Paymentid: '#746F5K2', date: '23 Jan 2019, 10:45pm ', amount: '$2300.00',status: 'Complete'},
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

  // const handleEdit = (userId) => {
  //   // Find the user to edit based on the userId
  //   const user = userRows.find((user) => user.id === userId);
  //   setUserToEdit(user);
  //   setShowUserEdit(true);
  // };

  // const closeUserEdit = () => {
  //   setShowUserEdit(false);
  // };

  return (
    <div className="InvoiceListcontainer">
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
            <span >All Invoice</span>
          </div>
          <table  className='InvoiceList-Table'>
            <thead >
              <tr   className='InvoiceListtr'>
                <th   className='InvoiceListTH'>PAYMENT ID</th>
                <th className='InvoiceListTH'>DATE</th>
                <th className='InvoiceListTH'>AMOUNT</th>
                <th className='InvoiceListTH'>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {userRows.map((user) => (
                <tr  key={user.id}>
                  <td className='InvoiceListTH'>{user.Paymentid}</td>
                  <td className='InvoiceListTH'>{user.date}</td>
                  <td className='InvoiceListTH'>{user.amount}</td>
                  {/* <td className='InvoiceListTH'>{user.email}</td> */}
                  {/* <td className='InvoiceListTH'>
      {user.CardDetails && user.CardDetails.length >= 4 ? `**** **** **** ${user.CardDetails.slice(-4)}` : user.CardDetails}
    </td> */}
                 
                  <td className='InvoiceListTH' style={{ color: user.status === 'Complete' ? 'green' : 'orange' }}>
  {user.status}
</td>
                  {/* <td className='InvoiceListTH'>
                    {user.Action}
                    <td className='InvoiceListbutton'>
                      <button style={{ color: "darkblue" }} onClick={() => handleEdit(user.id)} title='Edit'>
                        <i class="bi bi-pen"></i>
                      </button>
                      <button style={{ color: "red" }} onClick={() => handleDelete(user.id)}>
                        <i class="bi bi-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InvoiceList;

