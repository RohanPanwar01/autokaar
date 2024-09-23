import React from 'react';
import './InvoiceDetails.css';

function InvoiceDetails() {
  const data = [
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    { itemid: 24108054, description: 'Dashlite - Conceptual App Dashboard - Regular License', price: '	$40.00',qty:'5',amount:'$200.00' },
    
  ];
  return (
    <div className='InvoiceDetailscontainerMain'>
      {/* <h2 style={{ marginTop: "100px", color: "red", textAlign: "center",marginLeft:"20%" }}>
        Invoice Details
      </h2> */}
      <div className='InvoiceDetailsWrapper'>
        <div className='InvoiceDetailscontainer'>
          <p>INVOICE TO</p>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Gregory Anderson</p>
          <p>House #65, 4328 Marion Street</p>
          <p>Newbury, VT 05051</p>
          <p>+012 8764 556</p>
        </div>

        <div className='InvoiceDetailscontainer2'>
          <h2>INVOICE</h2>
          <p>INVOICE ID: 66K5W3</p>
          <p>DATE: 26 Jan, 2020</p>
        </div>
      

      </div>
      <table className='InvoiceDetailsTable' > 
      <thead className='InvoiceDetailsthead'>
        <tr className='InvoiceDetailstr'>
          <th className='InvoiceDetailsthtd' >ITEM ID</th>
          <th className='InvoiceDetailsthtd'>DESCRIPTION</th>
          <th className='InvoiceDetailsthtd'>PRICE</th>
          <th className='InvoiceDetailsthtd'>QTY</th>
          <th className='InvoiceDetailsthtd'>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className='InvoiceDetailstr' key={item.id}>
            <td className='InvoiceDetailsthtd'>{item.itemid}</td>
            <td className='InvoiceDetailsthtd'>{item.description}</td>
            <td className='InvoiceDetailsthtd'>{item.price}</td>
            <td className='InvoiceDetailsthtd'>{item.qty}</td>
            <td className='InvoiceDetailsthtd'>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default InvoiceDetails;
