import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { useNavigate, useLocation,Link } from "react-router-dom";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
function Serveyform() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    formNo: "",
    date: "",
    studentname: "",
    age: "",
    class: "",
    fathername: "",
    fmobile: "",
    mothername: "",
    mmobile: "",
    occupation: "",
    qualification: "",
    address: "",
    schoolgoto: "",
    schoolmedium: "",
    schoolnearest: "",
    englishMedium: "",
    ncert: "",
    admissionTime: "",
  });
  useEffect(() => {
    if (state) {
      setFormData(state);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/servey-form-view", {
      state: formData,
    });
    console.log("Survey Form Data:", formData);
  };

  return (
    <Container className="mt-4">
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
                  Address: Plot No. 3, Maa Kali Nagar, Pawanagon Road, Ghongad
                  Kamtee, Nagpur - 441001 (MH)
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
                  <IconButton component={Link} to="/admissions">
                    <ArrowBackIcon />
                  </IconButton>
                </Tooltip>
                <span className="back-text">Back</span>
                                
                                </div>
          <h2 className="mb-4 mt-4 text-center">Servey Form</h2>
          <p className=" text-center">
            <strong>SESSION 2026-2027</strong>
          </p>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md="6" className="d-flex align-items-center">
                <Label className="me-2 fw-bold">Form No:</Label>
                <Input
                  type="text"
                  placeholder="Enter Form No"
                  style={{ maxWidth: "200px" }}
                  name="formNo"
                  value={formData.formNo}
                  onChange={handleChange}
                />
              </Col>
              <Col
                md="6"
                className="d-flex justify-content-end align-items-center"
              >
                <Label className="me-2 fw-bold">Date:</Label>
                <Input
                  type="date"
                  style={{ maxWidth: "200px" }}
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Student Name :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="studentname"
                      value={formData.studentname}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup row>
                  <Label sm="3">Age :</Label>
                  <Col sm="6">
                    <Input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup row>
                  <Label sm="3">Class :</Label>
                  <Col sm="6">
                    <Input
                      type="text"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Father Name :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="fathername"
                      value={formData.fathername}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Mobile No :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="fmobile"
                      value={formData.fmobile}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Mother Name :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="mothername"
                      value={formData.mothername}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Mobile No :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="mmobile"
                      value={formData.mmobile}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Occupation :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label sm="3">Qualification :</Label>
                  <Col sm="8">
                    <Input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup row>
                  <Label sm="3">Address :</Label>
                  <Col sm="8">
                    <Input
                      type="textarea"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup row>
                  <Label sm="3">Which school do your children go to ?:</Label>
                  <Col sm="8">
                    <Input
                      type="textarea"
                      name="schoolgoto"
                      value={formData.schoolgoto}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup row>
                  <Label sm="3">
                    What medium is the school ? Hindi,English,Marathi :
                  </Label>
                  <Col sm="8">
                    <Input
                      type="textarea"
                      name="schoolmedium"
                      value={formData.schoolmedium}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup row>
                  <Label sm="3">
                    Nearest school/convent/NMC with medium(if any) :
                  </Label>
                  <Col sm="8">
                    <Input
                      type="textarea"
                      name="schoolnearest"
                      value={formData.schoolnearest}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup row>
                  <Label sm="3">
                    You want to provide Quality Education in English medium to
                    your children :
                  </Label>
                  <Col sm="8">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.englishMedium === "Yes"}
                          onChange={() =>
                            setFormData({ ...formData, englishMedium: "Yes" })
                          }
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.englishMedium === "No"}
                          onChange={() =>
                            setFormData({ ...formData, englishMedium: "No" })
                          }
                        />
                      }
                      label="No"
                    />
                  </Col>
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup row>
                  <Label sm="3">
                    Do you want to give NCERT Education to your children ?:
                  </Label>
                  <Col sm="8">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.ncert === "Yes"}
                          onChange={() =>
                            setFormData({ ...formData, ncert: "Yes" })
                          }
                        />
                      }
                      label="Yes"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.ncert === "No"}
                          onChange={() =>
                            setFormData({ ...formData, ncert: "No" })
                          }
                        />
                      }
                      label="No"
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup row>
                  <Label sm="3">
                    When will the children's admission be confirmed? :
                  </Label>
                  <Col sm="8">
                    <Input
                      type="textarea"
                      name="admissionTime"
                      value={formData.admissionTime}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md="6" className="text-start">
                <span className="blank-line-left"></span>
                <div>
                  <strong>Teacher Name & Signature</strong>
                </div>
              </Col>

              <Col md="6" className="text-end">
                <span className="blank-line-left"></span>
                <div>
                  <strong>Signature of Parent's</strong>
                </div>
              </Col>
            </Row>
            <div className="text-center mt-4">
              <Button type="submit" className="org-btn">
                {formData ? "Update " : "Submit"}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Serveyform;
