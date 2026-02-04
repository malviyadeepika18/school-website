import React,{useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, CardBody,Button } from "reactstrap";
import IconButton from "@mui/material/IconButton";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";

const EnquireformView = () => {

  const navigate = useNavigate();
   const printRef = useRef(null);
const routerLocation  = useLocation();
 const data  = routerLocation .state;
  if (!data) {
    return <p>No data found</p>;
  }

  const handleEdit = () => {
    navigate("/admissions",{state:data});
  }

   const handlePrint = () => {
    window.print();
  };

    const handleDownload = async () => {
    if (!printRef.current) return;

    const canvas = await html2canvas(printRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let position = 0;

    // Handle multiple pages if content is taller than a page
    if (imgHeight < pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    } else {
      let heightLeft = imgHeight;
      while (heightLeft > 0) {
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
        if (heightLeft > 0) pdf.addPage();
      }
    }

    pdf.save("Admission-Enquiry.pdf");
  };
  return (
    <Container className="mt-5 bg-view">
           <div ref={printRef}>
  <Card>
        <CardBody>
          
          <div className="school-header">
            <div className="header-row">
              <div className="logo-box">
                <img src={logoimg} 
                alt="school-logo"
                className="school-logo"
                />
                
              </div>
              <div className="school-details">
         <h1 className="school-name-style">
  KID'S RITES INTERNATIONAL SCHOOL
</h1>
<p className="affiliated">
  Affiliated by: Council of Universal Buddhist University
</p>
<p>Run by</p>
<p className="runby">
      <strong>Youth Welfare and Cultural Organisation, Nagpur</strong>
</p>
   <p className="registration">
        (Govt. of Maharashtra Regd. No. - S. R. Act 1860 - MAH-1124/12(N),
        B.P.T. Act 1950 - F-27429 (Nag))
      </p>

      <p className="address">
        Address: Plot No. 3, Maa Kali Nagar, Pawanagon Road,
        Ghongad Kamptee, Nagpur - 441001 (MH)
      </p>

      <p className="contact">
        Office Contact No.: 9112398739 / 9096944337
      </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="view-pages"> 
        <CardBody >
         <div className="back-action">
               <Tooltip title="Go Back" arrow>
                 <IconButton onClick={() => navigate(-1)}>
                   <ArrowBackIcon />
                 </IconButton>
               </Tooltip>
               <span className="back-text">Back</span>
             </div>
         
         
                      <div className="action-icons">
             <Tooltip title="Print" arrow>
             <PrintIcon onClick={handlePrint} />
           </Tooltip>
         
           <Tooltip title="Download" arrow>
             <DownloadIcon onClick={handleDownload} />
           </Tooltip></div>
          <h2 className="mb-4  text-center">Admission Enquiry Details</h2>

          <p><strong>Student Name:</strong> {data.studentName}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Mobile:</strong> {data.mobile}</p>
          <p><strong>State:</strong> {data.state}</p>
          <p><strong>City:</strong> {data.city}</p>
       
       <div className="text-center mt-4 ">
            <Button color="primary" onClick={handleEdit} className="me-2">
              Edit <EditIcon />
            </Button>
              

          </div>
   
        </CardBody>
      </Card>
      </div>
    </Container>
  );
};

export default EnquireformView;
