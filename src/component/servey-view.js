import React, { useRef } from "react";
import { Container, Card, CardBody, Col, Row } from "reactstrap";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";


function Serveyview() {
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
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Servey-form.pdf");
  };

  return (
    <Container>
      <div ref={printRef}>
        <Card>
          <CardBody>
            <div className="school-header">
              <div className="header-row">
                <div className="logo-box">
                  <img
                    src={logoimg}
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
                    Kamptee, Nagpur - 441001 (MH)
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
                <EditIcon
                  size="sm"
                  color="warning"
                  onClick={() => navigate("/servey-form", { state })}
                />
              </Tooltip>
              <Tooltip title="Print" arrow>
                <PrintIcon onClick={handlePrint} />
              </Tooltip>

              <Tooltip title="Download" arrow>
                <DownloadIcon onClick={handleDownload} />
              </Tooltip>
            </div>
            <h2 className="text-center">Survey View</h2>
            <p className=" text-center">
              {" "}
              <strong>SESSION 2026-2027</strong>{" "}
            </p>
            <Row className="mb-3">
              <Col>
                <strong>Form No:</strong> {state.formNo}
              </Col>
              <Col className="text-end">
                <strong>Date:</strong> {state.date}
              </Col>
            </Row>
            <Row>
              <div className="info-section">
                <h5 className="section-title-grid">Student Information</h5>
                <div className="info-grid">
                  <div>
                    <b>Student Name:</b> {state.studentname}
                  </div>
                  <div>
                    <b>Age:</b> {state.age}
                  </div>
                  <div>
                    <b>Class:</b> {state.class}
                  </div>
                  <div>
                    <b>Father Name:</b> {state.fathername}
                  </div>
                  <div>
                    <b>Father Mobile:</b> {state.fmobile}
                  </div>
                  <div>
                    <b>Mother Name:</b> {state.mothername}
                  </div>
                  <div>
                    <b> Mother Mobile:</b> {state.mmobile}
                  </div>
                  <div>
                    <b>Occupation:</b> {state.occupation}
                  </div>
                  <div>
                    <b>Qualification:</b> {state.qualification}
                  </div>

                  <div>
                    <b>Address:</b> {state.address}
                  </div>
                  <div>
                    <b>Which school do your children go to ?:</b>{" "}
                    {state.schoolgoto}
                  </div>
                  <div>
                    <b> What medium is the school ? Hindi,English,Marathi :</b>{" "}
                    {state.schoolmedium}
                  </div>
                  <div>
                    <b>Nearest school/convent/NMC with medium(if any) :</b>{" "}
                    {state.schoolnearest}
                  </div>

                  <div>
                    <b>
                      {" "}
                      You want to provide Quality Education in English medium to
                      your children:
                    </b>{" "}
                    {state.englishMedium}
                  </div>
                  <div>
                    <b>
                      {" "}
                      Do you want to give NCERT Education to your children ?:
                    </b>{" "}
                    {state.ncert}
                  </div>
                  <div>
                    <b>When will the children's admission be confirmed? :</b>{" "}
                    {state.admissionTime}
                  </div>
                </div>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
    </Container>
  );
}

export default Serveyview;
