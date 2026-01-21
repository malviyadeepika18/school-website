import React,{useRef} from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';




function ReceiptView() {
      const navigate = useNavigate();
  const { state } = useLocation();


  

  const printRef = useRef(null);
const handlePrint = () => {
    window.print();
  };


   const handleDownload = async () => {
    if (!printRef.current) return;

    const canvas = await html2canvas(printRef.current, {
      scale: 2,
      useCORS: true,
    });

   
    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Receipt-form.pdf");
  };

  return (
    <Container className="mt-4">
            <div ref={printRef}>
         <Card>
        <CardBody>

          <div className="school-header">
            <div className="header-row">
              <div className="logo-box">
                <img src={logoimg} alt="school-logo" className="school-logo" />
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
                  <strong>
                    Youth Welfare and Cultural Organisation, Nagpur
                  </strong>
                </p>
                <p className="registration">
                  (Govt. of Maharashtra Regd. No. - S. R. Act 1860 -
                  MAH-1124/12(N), B.P.T. Act 1950 - F-27429 (Nag))
                </p>

                <p className="address">
                  {" "}
                  Address: Plot No. 3, Maa Kali Nagar, Pawanagon Road, Ghongad
                  Kamtee, Nagpur - 441001 (MH)
                </p>

                <p className="contact">
                  {" "}
                  Office Contact No.: 9112398739 / 9096944337
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
            <div className="back-action">
      <Tooltip title="Go Back" arrow>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <span className="back-text">Back</span>
    </div>


             <div className="action-icons">
                <Tooltip title="Edit" arrow>
    <EditIcon size="sm" color="warning" onClick={() => navigate("/receipt-form", { state })} />
     
  </Tooltip>
    <Tooltip title="Print" arrow>
    <PrintIcon onClick={handlePrint} />
  </Tooltip>

  <Tooltip title="Download" arrow>
    <DownloadIcon onClick={handleDownload} />
  </Tooltip>
    </div>
          <h2 className="text-center">Receipt to Enrollment</h2>
  <p className=" text-center">
            {" "}
            <strong>SESSION 2026-2027</strong>{" "}
          </p>
      
           <div className="info-section">

             <h5 className="section-title-grid"> Information</h5>
              <div className="info-grid">
        <div><b>Form No:</b> {state.formNo}</div>
   <div><b>Date:</b> {state.date}</div>
<div><b>Student Name:</b> {state.studentName}</div>
<div><b>Class:</b> {state.className}</div>
<p> Receipt with thanks from Mr./Mrs.{" "}
            <strong>{state.parentName}</strong> for an amount of Rs.{" "}
            <strong>{state.amount} ({state.amountWords} </strong>Rupees only){" "}
            towards for enrollment to the school.</p>






           </div>
       </div>
         <Row>
            {" "}
            <Col md="12" className="text-end">
              <div className="text-center mt-4">
                <span>
                  <strong>Principal</strong>
                </span>
                <div>
                  <strong>KID'S RITES INTERNATIONAL SCHOOL</strong>
                </div>
              </div>
            </Col>
          </Row>
      
        </CardBody>
      </Card>
</div>
     
    </Container>
  );
}

export default ReceiptView;
