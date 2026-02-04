import React,{useRef} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, CardBody, Button ,Row,Col} from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg"
import EditIcon from '@mui/icons-material/Edit';
import {Checkbox, FormControlLabel,TextField } from '@mui/material';
const AdmissionView = () => {
  const navigate = useNavigate();
  const location = useLocation();
   const printRef = useRef(null);
  // form data coming from Admissionform
  const data = location.state;

  if (!data) {
    return <p>No data found</p>;
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

    pdf.save("Admission-form.pdf");
  };

  return (
    <Container className="mt-4">
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
       
                   <EditIcon
  onClick={() =>
    navigate("/admission-form", {
      state: data,  
    })
  }
/>

                </Tooltip>
    <Tooltip title="Print" arrow>
    <PrintIcon onClick={handlePrint} />
  </Tooltip>

  <Tooltip title="Download" arrow>
    <DownloadIcon onClick={handleDownload} />
  </Tooltip>
    </div>
            
          <h3 className="text-center mb-4">Admission View</h3>

         <CardBody>
             <p><strong>FOR OFFICE USE ONLY :-</strong></p>
         
             <Row>
               {/* LEFT SIDE CONTENT */}
               <Col md="9">
                 <div className="mb-3">
                   <TextField label="Form No." size="small" sx={{ mr: 2 }} />
                   <TextField label="Admission No." size="small" sx={{ mr: 2 }} />
                   <TextField
                     label="Date"
                     type="date"
                     size="small"
                     InputLabelProps={{ shrink: true }}
                     
                   />
                 </div>
         
                 <div className="mb-2">
                   <FormControlLabel control={<Checkbox />} label="RE-ADMISSION" />
                   <FormControlLabel control={<Checkbox />} label="NEW-ADMISSION" />
                 </div>
         
                 <div className="mb-2">
                   <strong>SESSION 2025-2026</strong>
                 </div>
         
                 <div className="mb-2">
                   <strong>Admission Required For :-</strong>
                   <FormControlLabel control={<Checkbox />} label="NURSERY" />
                   <FormControlLabel control={<Checkbox />} label="LKG" />
                   <FormControlLabel control={<Checkbox />} label="UKG" />
                 </div>
         
                 <div>
                   <FormControlLabel control={<Checkbox />} label="STD-I" />
                   <FormControlLabel control={<Checkbox />} label="STD-II" />
                   <FormControlLabel control={<Checkbox />} label="STD-III" />
                   <FormControlLabel control={<Checkbox />} label="STD-IV" />
                   <FormControlLabel control={<Checkbox />} label="STD-V" />
                 </div>
               </Col>
         
               {/* RIGHT SIDE PHOTO BOX */}
               <Col md="3" className="text-center">
                 <div className="photo-box">
                   <span>STUDENT PHOTO</span>
                 </div>
               </Col>
             </Row>
           </CardBody>



              <div className="info-section">
      <h5 className="section-title-grid">Student Information</h5>
      <div className="info-grid">
        <div><b>Student Name:</b> {data.studentname}</div>
        <div><b>Date of Birth:</b> {data.dob}</div>
        <div><b>Gender:</b> {data.gender}</div>
        <div><b>Age:</b> {data.age}</div>
        <div><b>DOB in Words:</b> {data.dobwords}</div>
        <div><b>Birth Place:</b> {data.birthplace}</div>
        <div><b>Blood Group:</b> {data.bloodgroup}</div>
        <div><b>Religion:</b> {data.religion}</div>
        <div><b>Caste:</b> {data.cast}</div>
        <div><b>Category:</b> {data.category}</div>
        <div><b>Aadhar No:</b> {data.aadharcard}</div>
        <div><b>Mother Tongue:</b> {data.mothertongue}</div>
      </div>
    </div>

    {/* ================= PARENT INFO ================= */}
    <div className="info-section">
      <h5 className="section-title-grid">Parent Information</h5>
      <div className="info-grid">
        <div><b>Father Name:</b> {data.fathername}</div>
        <div><b>Father Qualification:</b> {data.fqualification}</div>
        <div><b>Mother Name:</b> {data.motherrname}</div>
        <div><b>Mother Qualification:</b> {data.mqualification}</div>
        <div><b>Parent Occupation:</b> {data.parentoccupation}</div>
        <div><b>Annual Income:</b> {data.annualincome}</div>
      </div>
    </div>

    {/* ================= CONTACT INFO ================= */}
    <div className="info-section">
      <h5 className="section-title-grid">Contact Information</h5>
      <div className="info-grid">
        <div><b>Mobile:</b> {data.mobile}</div>
        <div><b>Email:</b> {data.email}</div>
        <div><b>Address:</b> {data.address}</div>
        <div><b>City:</b> {data.city}</div>
        <div><b>State:</b> {data.state}</div>
        <div><b>Pincode:</b> {data.pincode}</div>
      </div>
    </div>

    {/* ================= HEALTH INFO ================= */}
    <div className="info-section">
      <h5 className="section-title-grid">Health Information</h5>
      <div className="info-grid">
        <div><b>Birth Mark:</b> {data.birthmark}</div>
        <div><b>Allergies:</b> {data.allergies}</div>
        <div><b>Health Issue:</b> {data.healthissue}</div>
        <div><b>Speaks English:</b> {data.childspeak}</div>
      </div>
    </div>

    {/* ================= SCHOOL INFO ================= */}
    <div className="info-section">
      <h5 className="section-title-grid">Previous School Information</h5>
      <div className="info-grid">
        <div><b>Previous School:</b> {data.previousschoolname}</div>
        <div><b>Current Grade:</b> {data.currentgrade}</div>
        <div><b>Medium:</b> {data.mediumschool}</div>
        <div><b>Previous Result:</b> {data.previoussclass}</div>
        <div><b>Grade:</b> {data.grade}</div>
      </div>
    </div>
             <Row className="mt-4">
  <Col md="12">
    <hr className="declaration-line" />
  </Col>
</Row>
    <h3 className="text-center">Declaration</h3>

<p className="declaration-para">
  I am Mr./Mrs. <strong>{data.declarantName}</strong>
  Father’s/Mother’s/Guardian of{" "}
  <strong>{data.childName}</strong> is ready and agree to follow up all the
  rules and regulations of the School.
</p>

<div className="declaration-footer">
  <div>
    <div className="signature-line"></div>
    <strong>Sign of Parent</strong>
  </div>

  <div className="principal-box">
    <strong>Principal</strong>
    <div>KID'S RITES INTERNATIONAL SCHOOL</div>
  </div>
</div>

        </CardBody>
      </Card>
      </div>
    </Container>
  );
};

export default AdmissionView;
