import React, { useState, useEffect } from 'react';
import './PropertiesUnderReview.css';
import PropertiesUnderEyes from '../PropertiesUnderEyes/PropertiesUnderEyes';

function PropertiesUnderReview() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [deleteMessageVisible, setDeleteMessageVisible] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const [userRows, setUserRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/pending-properties');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setUserRows(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserRows([]);
    }
  };

  const handleAccept = async (user_id, property_id) => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/accept_property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, property_id }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log('Accept response:', data);
      setSuccessMessageVisible(true);
      fetchData();
      setTimeout(() => setSuccessMessageVisible(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error('Error accepting property:', error);
    }
  };

  const handleCancel = async (user_id, property_id) => {
    try {
      const response = await fetch('http://sher9522.caribbeaneaze.com/api/owner/reject_property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, property_id }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      console.log('Cancel response:', data);
      setDeleteMessageVisible(true);
      fetchData();
      setTimeout(() => setDeleteMessageVisible(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error('Error cancelling property:', error);
    }
  };

  const handleFullScreen = (propertyId) => {
    setSelectedPropertyId(propertyId);
    setShowFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setShowFullScreen(false);
    setSelectedPropertyId(null);
  };

  return (
    <div className="PropertiesUnderReviewcontainer">
      {/* Success and delete messages */}
      {successMessageVisible && (
        <div className="success-message">
          Request approved successfully!
        </div>
      )}

      {deleteMessageVisible && (
        <div className="delete-message">
          Declined successfully!
        </div>
      )}
      
      <h2>Properties Under Review</h2>
      {/* Table displaying properties under review */}
      {userRows.length > 0 ? (
        <table className="PropertiesUnderReview-Table">
          <thead>
            <tr className="PropertiesUnderReviewtr">
              <th className="PropertiesUnderReviewTH">S.No</th>
              <th className="PropertiesUnderReviewTH">Property Name</th>
              <th className="PropertiesUnderReviewTH">Country</th>
              <th className="PropertiesUnderReviewTH">Phone</th>
              <th className="PropertiesUnderReviewTH">Action</th>
            </tr>
          </thead>
          <tbody>
            {userRows.map((user, index) => (
              <tr key={user.property_id}>
                <td className="PropertiesUnderReviewTH">{index + 1}</td>
                <td className="PropertiesUnderReviewTH">{user.property_name}</td>
                <td className="PropertiesUnderReviewTH">{user.country}</td>
                <td className="PropertiesUnderReviewTH">{user.phone}</td>
                <td className="PropertiesUnderReviewTH">
                  <div className="PropertiesUnderReviewbutton">
                    <button style={{ color: "black" }} onClick={() => handleFullScreen(user.property_id)} title="View">
                      <i className="bi bi-eye-fill"></i>
                    </button>
                    <button style={{ color: "#05ec11" }} onClick={() => handleAccept(user.user_id, user.property_id)} title="accept">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                    <button style={{ color: "red" }} onClick={() => handleCancel(user.user_id, user.property_id)} title="cancel">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-records-message">
          No records found.
        </div>
      )}

      {/* Full screen overlay */}
      {showFullScreen && (
        <div className="full-screen-overlay">
          <div className="full-screen-content">
            <PropertiesUnderEyes propertyId={selectedPropertyId} close={handleCloseFullScreen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertiesUnderReview;
