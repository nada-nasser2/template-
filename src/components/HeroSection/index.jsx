import "./index.scss";
export default function HeroSection() {
  return (
    <div id="HeroSection" className="col-12">
      <div class="custom-shape-divider-bottom-1716893691">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="detailsAccount col-5">
        <p className="d-flex align-items-center gap-3 p_myaccount">
          <div className="span"></div>MY ACCOUNT
        </p>
        <h1>Check Your Account Details</h1>
        <p className="p_detalis">
          Capitalize on low hanging fruit to identify a ballpark value added.
        </p>
      </div>
    </div>
  );
}
