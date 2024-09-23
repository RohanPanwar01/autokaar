// import React, { useState } from 'react';
// import "./UserEditComponents.css";

// function UserEditComponents({ user, onClose }) {
//   const [editedUser, setEditedUser] = useState({
//     name: user ? user.name : '',
//     phone: user ? user.phone : '',
//     email: user ? user.email : '',
//     Phone: user ? user.phone : '',
//     Joined: user ? user.joined : '',
    
//     // Add other fields as needed
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement save logic here with editedUser data
//     // You may want to update the userRows array or perform any other necessary actions
//     onClose(); // Close the UserEditComponents after saving
//   };

//   return (
//     <div className='UserEditComponents'>
//       <form onSubmit={handleSubmit}>
//         <label className="FormLabel">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={editedUser.name}
//             onChange={handleInputChange}
//             className="FormInput"
//           />
//         </label>
//         <label className="FormLabel">
//           Phone:
//           <input
//             type="text"
//             name="phone"
//             value={editedUser.phone}
//             onChange={handleInputChange}
//             className="FormInput"
//           />
//         </label>
//         <label className="FormLabel">
//           Email:
//           <input
//             type="text"
//             name="email"
//             value={editedUser.email}
//             onChange={handleInputChange}
//             className="FormInput"
//           />
//         </label>
//         <label className="FormLabel">
//           Phone:
//           <input
//             type="text"
//             name="email"
//             value={editedUser.phone}
//             onChange={handleInputChange}
//             className="FormInput"
//           />
//         </label>
//         {/* Add other input fields as needed */}
//         <div className="UserEditButtons">
//           <button type="submit" className="SaveButton">Save</button>
//           <button type="button" onClick={onClose} className="CancelButton">Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default UserEditComponents;


import React from 'react'
import "./UserEditComponents.css"

function UserEditComponents({user, onClose}) {

  const handleSubmit = (e) => {
        e.preventDefault();
        // Implement save logic here with editedUser data
        // You may want to update the userRows array or perform any other necessary actions
        onClose(); // Close the UserEditComponents after saving
      };


  return (
    <div>
<div class="containeruser rounded bg-white mt-4 mb-4" >
    <div class="row">
        
        <div class="useredit" >
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="userright" >User Edit Details</h4>
                </div>
                <div class="row " id='userEditDetails2' style={{fontWeight:"bold"}}>
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control"  placeholder="surname"/></div>
                </div>
                <div class="row mt-3" style={{fontWeight:"bold"}}>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                    <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                    <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" /></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" /></div>
                    <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" /></div>
                </div>
                <div class="row mt-3" style={{fontWeight:"bold"}}>
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" /></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control"  placeholder="state"/></div>
                </div>

                <div class="mt-5 text-center">
                <button type="submit" className="SaveButton">Save</button>
         <button style={{marginLeft:"100px"}} type="button" onClick={onClose} className="CancelButton">Cancel</button>
</div>
                
            </div>
        </div>
        <div class="col-md-4">
            
        </div>
    </div>
</div>

</div>

  )
}

export default UserEditComponents