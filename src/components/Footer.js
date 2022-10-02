// function Footer() {
//   return (
//     <div>
//       <div className="pt-5 mt-2">
//         <div className="container-fluid p-1 my-2 bg-dark text-white fixed-bottom">
//           <p style={{ textAlign: "center", paddingTop: "15px" }}>
//             All Rights Are Reserved Copyright@CDAC Mumbai
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdb-react-ui-kit";
import React from "react";

function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-md-start text-muted">
      <MDBContainer className="text-center text-md-start">
        <MDBRow className="mt-4">
          <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 mt-5">
            <h4 className="text-light text-uppercase fw-bold mb-4">ESRA</h4>
            <p>
              We believe we can leverage the information and technology
              available to us, along with a shared goal of making our roads
              safer, to create a world where no victim is left unattended after
              an accident.
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 mt-5">
            <h6 className="text-light text-uppercase fw-bold mb-4">Contact</h6>
            <p>Mumbai 400001</p>
            <p>
              <a
                href="https://www.google.co.in/"
                className="text-reset fw-bold"
              >
                cdacmumbai@gmail.com
              </a>
            </p>
            <p>+ 91-70205-65850</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-light text-center p-3 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://www.google.co.in/">
          CDAC Mumbai
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;
