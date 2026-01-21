
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../image/kid.jpg";
import img2 from "../image/kid.jpg";
import img3 from "../image/kid.jpg";
import img4 from "../image/kids.avif";
import img5 from "../image/kids.avif";
import img6 from "../image/kid.jpg";
import img7 from "../image/kid.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6,img7];

function Gallery() {
  const imagesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  return (
    <>
     
      <div className="about-header-full">
        <Container>
          <div className="testimonial-header text-center justify-content-center">
            <div className="header-icons">
              <span className="dot blue"></span>
              <span className="dot orange"></span>
            </div>
            <h3 className="section-title text-white">Gallery</h3>
          </div>
        </Container>
      </div>

    
      <Container className="gallery-section my-5">
        <Row>
          {currentImages.map((img, index) => (
            <Col md="4" sm="6" xs="12" key={index} className="mb-4">
              <div className="gallery-card">
                <img src={img} alt={`gallery-${index}`} className="img-fluid" />
              </div>
              <h6 className="mt-2 text-center">Hello</h6>
            </Col>
          ))}
        </Row>

        <div className="pagination-wrapper d-flex justify-content-center align-items-center mt-4 gap-2">
          
      
          <Button
            color="warning"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <Button
                key={page}
                color={currentPage === page ? "dark" : "warning"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            );
          })}

          <Button
            color="warning"
           
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Button>

        </div>
      </Container>
    </>
  );
}

export default Gallery;
