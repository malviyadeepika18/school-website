
import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import img1 from "../image/WhatsApp Image 2026-02-04 at 10.32.06 AM (1).jpeg";
import img2 from "../image/WhatsApp Image 2026-02-04 at 10.32.07 AM (3).jpeg";
import img3 from "../image/WhatsApp Image 2026-02-04 at 10.32.06 AM (2).jpeg";
import img4 from "../image/WhatsApp Image 2026-02-04 at 10.32.06 AM.jpeg";
import img5 from "../image/WhatsApp Image 2026-02-04 at 10.32.08 AM.jpeg";
import img6 from "../image/WhatsApp Image 2026-02-04 at 10.32.09 AM (1).jpeg";
import img7 from "../image/WhatsApp Image 2026-02-04 at 10.32.11 AM (1).jpeg";
import img8 from "../image/WhatsApp Image 2026-02-04 at 10.32.11 AM (3).jpeg";
import img9 from "../image/WhatsApp Image 2026-02-04 at 10.31.56 AM (1).jpeg";

import img10 from "../image/WhatsApp Image 2026-02-04 at 10.32.12 AM.jpeg";
import img11 from "../image/WhatsApp Image 2026-02-04 at 10.32.13 AM (2).jpeg";
import img12 from "../image/WhatsApp Image 2026-02-04 at 10.32.13 AM.jpeg";
import img13 from "../image/WhatsApp Image 2026-02-04 at 10.32.14 AM (1).jpeg"
import img14 from "../image/WhatsApp Image 2026-02-04 at 10.32.14 AM.jpeg"
import img15 from "../image/WhatsApp Image 2026-02-04 at 10.32.15 AM (1).jpeg"
import img16 from "../image/WhatsApp Image 2026-02-04 at 10.32.15 AM (2).jpeg"
import img17 from "../image/WhatsApp Image 2026-02-04 at 10.32.16 AM.jpeg"
import img18 from "../image/WhatsApp Image 2026-02-04 at 10.32.17 AM (3).jpeg"
import img19 from "../image/WhatsApp Image 2026-02-04 at 10.32.17 AM (1).jpeg"
import img20 from "../image/WhatsApp Image 2026-02-04 at 10.32.17 AM (2).jpeg"
import img21 from "../image/WhatsApp Image 2026-02-04 at 10.32.17 AM.jpeg"
import img22 from "../image/WhatsApp Image 2026-02-04 at 10.32.18 AM (1).jpeg"
import img23 from "../image/WhatsApp Image 2026-02-04 at 10.32.19 AM (1).jpeg"
import img24 from "../image/WhatsApp Image 2026-02-04 at 10.32.19 AM (2).jpeg"
import img25 from "../image/WhatsApp Image 2026-02-04 at 10.32.19 AM.jpeg"
import img26 from "../image/WhatsApp Image 2026-02-04 at 10.32.16 AM (1).jpeg"
import img27 from "../image/WhatsApp Image 2026-02-04 at 10.31.56 AM (2).jpeg"
import img28 from "../image/WhatsApp Image 2026-02-04 at 10.31.58 AM (3).jpeg"
import img29 from "../image/WhatsApp Image 2026-02-04 at 10.31.59 AM (2).jpeg"
import img30 from "../image/WhatsApp Image 2026-02-04 at 10.32.00 AM (1).jpeg"
import img31 from "../image/WhatsApp Image 2026-02-04 at 10.32.00 AM (2).jpeg"
import img32 from "../image/WhatsApp Image 2026-02-04 at 10.32.00 AM (3).jpeg"
import img33 from "../image/WhatsApp Image 2026-02-04 at 10.32.01 AM (1).jpeg"
import img34 from "../image/WhatsApp Image 2026-02-04 at 10.32.01 AM.jpeg"
import img35 from "../image/WhatsApp Image 2026-02-04 at 10.32.02 AM (1).jpeg"
import img36 from "../image/WhatsApp Image 2026-02-04 at 10.32.02 AM (2).jpeg"
import img37 from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (1).jpeg"
import img38 from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (2).jpeg"
import img39 from "../image/WhatsApp Image 2026-02-04 at 10.32.03 AM (3).jpeg"


const galleryImages = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39];

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
              {/* <h6 className="mt-2 text-center">Hello</h6> */}
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
