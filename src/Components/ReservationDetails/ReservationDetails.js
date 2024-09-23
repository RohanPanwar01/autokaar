import React from 'react';
import './ReservationDetails.css';

function ReservationDetails() {
  const data = [
    { GuestName: 'Alfreds Futterkiste', ReservationDates: 'Maria Anders', RoomType: 'Germany',Preferences:'Maria Anders',SpecialRequests:'Maria Anders',ReservationStatus:'Confirm' },
   
   
  ];

  return (
    <div className='ReservationDetails'>
     

      <div className='Reservation-table-container'>
        <table className='Reservation-table'>
          <thead>
            <tr className='Reservation-tr'>
              <th className='Reservation-td-th'> Guest Name,</th>
              <th className='Reservation-td-th'> Reservation Dates,</th>
              <th className='Reservation-td-th'> Room Type,</th>
              <th className='Reservation-td-th'>  Preferences</th>
              <th className='Reservation-td-th'>Special Requests</th>
              <th className='Reservation-td-th'>Reservation Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr className='Reservation-tr' key={index}>
                <td className='Reservation-td-th'>{row.GuestName}</td>
                <td className='Reservation-td-th'>{row.ReservationDates}</td>
                <td className='Reservation-td-th'>{row.RoomType}</td>
                <td className='Reservation-td-th'>{row.Preferences}</td>
                <td className='Reservation-td-th'>{row.SpecialRequests}</td>
                <td className={`Reservation-td-th ${row.ReservationStatus === 'Confirm' ? 'confirm' : 'pending'}`}>
                  {row.ReservationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReservationDetails;
