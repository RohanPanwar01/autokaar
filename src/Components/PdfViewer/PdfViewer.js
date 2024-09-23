// PDFViewer.js
import React, { useState } from 'react';
import './PdfViewer.css';

const pdfs = [
  { name: 'PDF 1', url: 'assets/img/Resume-1 (1).pdf' },
  { name: 'PDF 2', url: '' },
  { name: 'PDF 3', url: '' },
  { name: 'PDF 4', url: '' },
];

function PdfViewer() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openPDF = (url) => {
    setPdfUrl(url);
    setIsViewerOpen(true);
  };

  const closePDF = () => {
    setPdfUrl('');
    setIsViewerOpen(false);
  };

  return (
    <div className="PdfViewer-pdf-container">
      {pdfs.map((pdf, index) => (
        <div className="PdfViewer-pdf" key={index} onClick={() => openPDF(pdf.url)}>
          {pdf.name}
        </div>
      ))}

      {isViewerOpen && (
        <>
          <div className="PdfViewer-overlay" onClick={closePDF}></div>
          <div className="PdfViewer-pdf-viewer-centered">
          <button onClick={closePDF}>Close PDF</button>
            <iframe src={pdfUrl} title="PDF Viewer" Border="0" width="100%" height="100%"></iframe>
            
          </div>
        </>
      )}
    </div>
  );
}

export default PdfViewer;
