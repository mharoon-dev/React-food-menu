import "./NavBar.css";
import deliveryBoyImage from "./assets/delivery boy.png";
import waiterImage from "./assets/waiter.png";

export default function NavBar() {
  return (
    <>
      <div style={{ position: "sticky" }} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand ms-5 mt-3 pb-2 ps-4"
            href="#"
            id="logoName"
          >
            Foodies
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="me-5" role="search">
              <button type="button" className="btn btn-outline-secondary me-3">
                <img
                  style={{ verticalAlign: "text-top", marginTop: "1px" }}
                  src={deliveryBoyImage}
                  width="25rem"
                  alt=""
                />
                &nbsp;Delivery
              </button>
              <button type="button" className="btn btn-warning me-2">
                <img
                  style={{ verticalAlign: "text-top" }}
                  src={waiterImage}
                  width="30rem"
                  alt=""
                />
                Call Waiter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
