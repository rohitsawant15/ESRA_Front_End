import Base from "./Base";
import Footer from "./Footer";
function AboutUs() {
  return (
    <div>
      <Base />

      <div class="p-3 mb-2 bg-light rounded-3">
        <div class="container-fluid py-4">
          <h1 class="display-5 fw-bold text-center">Vision</h1>
          <p class="col-md-12 fs-4 text-center">
            Our vision at CDAC Mumbai is to harness the power of smartphones to
            help accident victims in case of an emergency. We believe we can
            leverage the information and technology available to us, along with
            a shared goal of making our roads safer, to create a world where no
            victim is left unattended after an accident.
          </p>
        </div>
      </div>
      <div class="p-3 mb-2 bg-light rounded-3">
        <div class="container-fluid py-3">
          <h1 class="display-5 fw-bold text-center">Mission</h1>
          <p class="col-md-12 fs-4 text-center">
            Our mission at CDAC Mumbai is to make sure that nobody has to go
            through the trauma of being involved in an accident alone. We want
            to ensure that every victim gets the medical attention they need as
            quickly as possible so they can get back on their feet and return to
            their normal lives. With our product, Emergency Care for Road
            Accidents, we are working towards creating a safer world for
            everyone by providing on-demand medical assistance that can be
            accessed by accident victims at the simple press of a button.
          </p>
          <p className="pt-4"></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
