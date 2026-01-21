// import './App.css';
// import "./component/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./component/home";
// import Navbar from './component/navbar';
// import About from './component/about'
// import Hero from './component/hero';
// import Admissions from './component/admissions'
// import Footer from './component/footer';
// import Academic from './component/academic'
// import Layout from './layout';




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
// <BrowserRouter>
// <Routes>
//    <Route path='/' element={<Layout />} />
//   <Route index element={<Home />} />
//    <Route path='/navbar' element={<Navbar />} />
//      <Route path='/about-us' element={<About />} />
//      <Route path='/admissions' element={<Admissions />} />
//         <Route path='/hero' element={<Hero />} />
//          <Route path='/academic' element={<Academic />} />
//              <Route path='/footer' element={<Footer />} />
// </Routes>
// </BrowserRouter>



      
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import "./component/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./component/home";
import About from "./component/about";
import Admissions from "./component/admissions";
import Academic from "./component/academic";
import Events from "./component/event";
import Gallery from "./component/gallery";
import Contact from "./component/contact";
import Testimonials from "./component/testimonial"
import EnquireformView from "./component/enquireform-view"
import Admissionform from "./component/admission-form"
import AdmissionformView from "./component/admission-view"
import Serveyform from "./component/servey-form"
import Serveyview from "./component/servey-view"
import ReceiptForm from "./component/receipt-form"
import Receiptview from "./component/receipt-view"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="academic" element={<Academic />} />
          <Route path="event" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* <Route path="/enquireform-view" element={<EnquireformView />} /> */}
          <Route path="admission-form" element={<Admissionform />} />
          <Route path="/admission-view" element={<AdmissionformView />} />
          <Route path="/servey-form" element={<Serveyform />} />
            <Route path="/servey-form-view" element={<Serveyview />} />
              <Route path="receipt-form" element={<ReceiptForm />} />
                  <Route path="receipt-form-view" element={<Receiptview />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
