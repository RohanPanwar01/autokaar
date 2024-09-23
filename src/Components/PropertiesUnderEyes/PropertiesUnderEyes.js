import React, { useEffect, useState } from 'react';
import "./PropertiesUnderEyes.css"
// import { useState } from "react";
import PDFViewer from "../PdfViewer/PdfViewer";
function PropertiesUnderEyes({ propertyId,  close }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const pdfs = ['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf', 'pdf4.pdf'];
  const [propertyDetails, setPropertyDetails] = useState(null);
  const imageUrls = [
    'assets/img/Rectangle 21.png',
    'assets/img/Rectangle 23.png',
    'assets/img/Rectangle 21.png',
    'assets/img/Rectangle 23.png',
  ];
  useEffect(() => {
    // Fetch property details using the propertyId
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://sher9522.caribbeaneaze.com/api/owner/property/${propertyId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log('userr',data)
        setPropertyDetails(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    if (propertyId) {
      fetchPropertyDetails();
    }
  }, [propertyId]);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  const ImageData = [
    { src: 'assets/img/Rectangle 23.png', alt: 'Cinque Terre', },
    { src: 'assets/img/Rectangle 23.png', alt: 'Forest',  },
    { src: 'assets/img/Rectangle 23.png', alt: 'Northern Lights',  },
    { src: 'assets/img/Rectangle 23.png', alt: 'Cinque Terre',  },
    { src: 'assets/img/Rectangle 23.png', alt: 'Forest',  },
    { src: 'assets/img/Rectangle 23.png', alt: 'Northern Lights',  },
  ];
  return (
    <div>
      <div className="PropertiesUnderEyes-div">
       
<button  onClick={close}  className="close-btn">X</button>
  <div className="scroll-container">
    
    {/* {propertyDetails?.property_images?.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} width={image.width} height={image.height} />
    ))} */}
   <div>
        {propertyDetails?.property_images?.map((propertyImage, index) => {
          const imagePath = `https://sher9522.caribbeaneaze.com/Images/${propertyImage.filename}`;
          console.log(`Image ${index}: ${imagePath}`);
          return (
            <img
              key={index}
              className='property-image'
              src={imagePath}
              alt={`Image ${index}`}
            />
          );
        })}
      </div>
  </div>



        
        <div className="PropertiesUnderEyes-div-6">
          <div className="PropertiesUnderEyes-div-7">
            <div className="PropertiesUnderEyes-div-8">{propertyDetails?.property_name}</div>
            <div className="PropertiesUnderEyes-div-9">
              {/* <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a03be972e1db68664094f0667e9112b59b10983bf53671bdaa870065e21c9409?apiKey=f871d783806b49c6874a3173309d5ed0&"
                className="PropertiesUnderEyes-img-5"
              /> */}
              {/* <div className="PropertiesUnderEyes-div-10">
                <span style={{fontweight: "700;"}}>122 </span>(5.0)
              </div> */}
            </div>
            <div className="PropertiesUnderEyes-div-11">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46211689682710fabbd91e35b454c50592a065c1767722fdd1a5395ed3aeb04e?apiKey=f871d783806b49c6874a3173309d5ed0&"
                className="PropertiesUnderEyes-img-6"
              />
              <div className="PropertiesUnderEyes-div-12">{propertyDetails?.property_type
}</div>
            </div>
          </div>
          <div className="PropertiesUnderEyes-div-13">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b84df3b25e23f5bc6fc201adb2660e6a65a1008a9d7716224a726ccb13c217?apiKey=f871d783806b49c6874a3173309d5ed0&"
              className="PropertiesUnderEyes-img-7"
            /> */}
            <div className="PropertiesUnderEyes-div-14">{propertyDetails?.city} {propertyDetails?.country}</div>
          </div>
          <div className="PropertiesUnderEyes-div-15">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8dea86c6904658747fcbc1427cbe481ec898a9cd4ad73c5dd70b23be71f4e63?apiKey=f871d783806b49c6874a3173309d5ed0&"
              className="PropertiesUnderEyes-img-8"
            />
            <div className="PropertiesUnderEyes-div-16">
             {propertyDetails?.street_address}
            </div>
          </div>
          <div className="PropertiesUnderEyes-div-17">
            <div className="PropertiesUnderEyes-div-18">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/406c87e2e391373055187562882ef6ecc3552e7410230f88dc66a67273b08af3?apiKey=f871d783806b49c6874a3173309d5ed0&"
                className="PropertiesUnderEyes-img-9"
              />
              <div className="PropertiesUnderEyes-div-19">{propertyDetails?.guest_count} People</div>
            </div>
            <div className="PropertiesUnderEyes-div-20">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8dd1b0f45066d7a45f0a3d7de89baf0655a3e310946f9e6fdb6f47f9e9b439?apiKey=f871d783806b49c6874a3173309d5ed0&"
                className="PropertiesUnderEyes-img-10"
              />
              <div className="PropertiesUnderEyes-div-21">{propertyDetails?.bedroom_count} bedroom</div>
            </div>
            <div className="PropertiesUnderEyes-div-22">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/17e5c028efbdfd9c35833d72f64df1c85313e440146e56a3abf9b947186eda42?apiKey=f871d783806b49c6874a3173309d5ed0&"
                className="PropertiesUnderEyes-img-11"
              />
              <div className="PropertiesUnderEyes-div-23">{propertyDetails?.bathroom_count} Bathroom</div>
            </div>
          </div>
          <div className="PropertiesUnderEyes-div-24">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eeae56bb8510225e5c46c2b620909e806438a517aa85ca0620c8f1c191fa601?apiKey=f871d783806b49c6874a3173309d5ed0&"
              className="PropertiesUnderEyes-img-12"
            />
            <div className="PropertiesUnderEyes-div-25">John Doe</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6ef411f2ee041bf21a8e748ac9149f68e365bd518ed52a9427c1ff3640768b3?apiKey=f871d783806b49c6874a3173309d5ed0&"
            className="PropertiesUnderEyes-img-13"
          />
          <div className="PropertiesUnderEyes-div-26">Description</div>
          <div className="PropertiesUnderEyes-div-27">
           {propertyDetails?.property_description}
          </div>
          <div className="PropertiesUnderEyes-div-28">Extra Services</div>
<div className="PropertiesUnderEyes-div-29">
  {propertyDetails?.extra_service.map((service, index) => (
    <div key={service._id} className={`PropertiesUnderEyes-div-${index + 30}`}>
      {service.item}
    </div>
  ))}
</div>

<div className="PropertiesUnderEyes-div-35">Amenities</div>
<div className="PropertiesUnderEyes-div-36">
  {propertyDetails?.amenties.map((amenity, index) => (
    <div key={index} className={`PropertiesUnderEyes-div-${index + 37}`}>
      {amenity}
    </div>
  ))}
</div>

      
          {/* <div className="PropertiesUnderEyes-div-48">Feature</div>
          <div className="PropertiesUnderEyes-div-49">
            <div className="PropertiesUnderEyes-div-50">Pool</div>
            <div className="PropertiesUnderEyes-div-51">Smoking allowed</div>
            <div className="PropertiesUnderEyes-div-52">Indoor fireplace</div>
          </div> */}
          <br/> 

          <p style={{fontSize:"25px",fontWeight:"bold"}}>Uploaded Documents</p>
          <PDFViewer/>
          <div className="PropertiesUnderEyesimageimage-row">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="PropertiesUnderEyesimage"
          onClick={() => openImageModal(imageUrl)}
        />
      ))}

      {selectedImage && (
        <div className="PropertiesUnderEyesimage-modal" onClick={closeImageModal}>
          <img src={selectedImage} alt="Selected Image" className="PropertiesUnderEyesmodal-image" />
        </div>
      )}
    </div>
   
         <br/> <br/>
        
        </div>
      </div>
     
    </div>
  );
}

export default PropertiesUnderEyes;
