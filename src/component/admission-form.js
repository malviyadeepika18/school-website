import React, { useEffect,useState } from "react";
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
import {Checkbox, FormControlLabel,TextField } from '@mui/material';
import { useNavigate,useLocation,Link } from "react-router-dom";
import logoimg from "../image/WhatsApp Image 2025-12-19 at 5.38.15 PM.jpeg"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";


const Admissionform = () => {
const navigate = useNavigate();
const { state } = useLocation();
  const [formData, setFormData] = useState({
    studentname: "",
    fathername: "",
    fqualification:"",
    motherrname: "",
    mqualification: "",
    dob: "",
    gender: "",
    age: "",
    dobwords: "",
    birthplace: "",
    bloodgroup: "",
    religion: "",
    cast: "",
    category: "",
    aadharcard: "",
    mothertongue: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    parentoccupation: "",
    annualincome: "",
    childspeak: "",
    birthmark: "",
    allergies: "",
    healthissue: "",
    previousschoolname: "",
    currentgrade: "",
    mediumschool: "",
    previoussclass: "",
    grade: "",
    declarantName: "",
childName: "",


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

const handleSubmit = (e) =>{
  e.preventDefault();
  navigate("/admission-view",{
    state:formData
  })
  setFormData({
    studentname: "",
    fathername: "",
    fqualification:"",
    motherrname: "",
    mqualification: "",
    dob: "",
    gender: "",
    age: "",
    dobwords: "",
    birthplace: "",
    bloodgroup: "",
    religion: "",
    cast: "",
    category: "",
    aadharcard: "",
    mothertongue: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    parentoccupation: "",
    annualincome: "",
    childspeak: "",
    birthmark: "",
    allergies: "",
    healthissue: "",
    previousschoolname: "",
    currentgrade: "",
    mediumschool: "",
    previoussclass: "",
    grade: "",
    declarantName: "",
childName: "",

  });

 
}

  

  return (
   
    <Container className="mt-4">
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
    
      
                 
      <Card className="mb-3">
          <div className="back-action">
                       <Tooltip title="Go Back" arrow>
        <IconButton component={Link} to="/admissions">
          <ArrowBackIcon />
        </IconButton>
      </Tooltip>
      <span className="back-text">Back</span>
                      
                      </div>
         <h2 className="mb-4 mt-4 text-center">Admission Form</h2>
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
</Card>

      <Card>
        <CardBody>
      

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>Student Name</Label>
                  <Input
                    name="studentname"
                    value={formData.studentname}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Father Name</Label>
                  <Input
                    name="fathername"
                    value={formData.fathername}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Qualification</Label>
                  <Input
                    name="fqualification"
                    value={formData.fqualification}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Mother Name</Label>
                  <Input
                    name="motherrname"
                    value={formData.motherrname}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Qualification</Label>
                  <Input
                    name="mqualification"
                    value={formData.mqualification}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Gender</Label>
                  <Input
                    type="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Age</Label>
                  <Input
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>DOB in Words</Label>
                  <Input
                    name="dobwords"
                    value={formData.dobwords}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Birth Place</Label>
                  <Input
                    name="birthplace"
                    value={formData.birthplace}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Blood Group</Label>
                  <Input
                    name="bloodgroup"
                    value={formData.bloodgroup}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Religion</Label>
                  <Input
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Caste</Label>
                  <Input
                    name="cast"
                    value={formData.cast}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Category</Label>
                  <Input
                    type="select"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>NT</option>
                    <option>OBC</option>
                    <option>Gen.</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Aadhar Card No.</Label>
                  <Input
                    name="aadharcard"
                    value={formData.aadharcard}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Mother Tongue</Label>
                  <Input
                    name="mothertongue"
                    value={formData.mothertongue}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Mobile Number</Label>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="12">
                <FormGroup>
                  <Label>Address</Label>
                  <Input
                    type="textarea"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>State</Label>
                  <Input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <Label>Pincode</Label>
                  <Input
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="6">
                <FormGroup>
                  <Label>Parent's Occupation</Label>
                  <Input
                    name="parentoccupation"
                    value={formData.parentoccupation}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>

              <Col md="3">
                <FormGroup>
                  <Label>Annual Income</Label>
                  <Input
                    name="annualincome"
                    value={formData.annualincome}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Does Your Child Speak English?</Label>
                  <Input
                    type="select"
                    name="childspeak"
                    value={formData.childspeak}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Birth Marks</Label>
                  <span>(Medical information is compulsory)</span>
                  <Input
                    name="birthmark"
                    value={formData.birthmark}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Allergies</Label>

                  <Input
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Does your have any health issue? </Label>

                  <Input
                    name="healthissue"
                    value={formData.healthissue}
                    type="select"
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>Previous School Name</Label>

                  <Input
                    name="previousschoolname"
                    value={formData.previousschoolname}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Current Grade / STD</Label>

                  <Input
                    name="currentgrade"
                    value={formData.currentgrade}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Medium of School</Label>

                  <Input
                    name="mediumschool"
                    value={formData.mediumschool}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Result Of Previous Class</Label>

                  <Input
                    name="previoussclass"
                    value={formData.previoussclass}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Grade %</Label>

                  <Input
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <span>
                (Documents Attached :- AadharCard,Birth Certificate,Leaving
                Certificate,Marks Sheet)
              </span>
            </Row>

         

            <Row className="mt-4">
  <Col md="12">
    <hr className="declaration-line" />
  </Col>
</Row>



<h3 className="text-center">Declaration</h3>

<p className="declaration-para">
  I am Mr./Mrs.
  <input
    type="text"
    name="declarantName"
    value={formData.declarantName}
    onChange={handleChange}
    className="declaration-input"
  />
  Father’s/Mother’s/Guardian of
  <input
    type="text"
    name="childName"
    value={formData.childName}
    onChange={handleChange}
    className="declaration-input"
  />
  is ready and agree to follow up all the rules and regulations of the School.
</p>





            <Row className="mt-5">
              {/* LEFT SIDE */}
              <Col md="6" className="text-start">
                <span className="blank-line-left"></span>
                <div>
                  <strong>Sign of Parent</strong>
                </div>
              </Col>

              {/* RIGHT SIDE */}
              <Col md="6" className="text-end">
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

            <div className="text-center mt-4">
              <Button  type="submit" className="org-btn">
                    {formData ? "Update " : "Submit"}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Admissionform;
