import Base from "./Base";

import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Base />
      <div class="d-flex my-2">
        <div class="mx-2">
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://img.freepik.com/premium-vector/accident-road-background-damaged-spped-cars-urban-landscape-emergency-help-broken-transport-pictures_80590-6829.jpg?w=2000"
            alt="image1"
          />
        </div>
        <div class="mx-1">
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://www.performancetowingwa.com.au/wp-content/uploads/2016/09/shutterstock_192479963.jpg"
            alt="image2"
          />
        </div>
        <div class="mx-1">
          <img
            style={{ width: "500px", height: "500px" }}
            src="https://img.freepik.com/premium-vector/woman-worker-testifies-traffic-police-about-car-accident_353206-42.jpg?w=2000"
            alt="image3"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
