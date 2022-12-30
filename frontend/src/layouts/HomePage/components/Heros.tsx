export const Heros = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Are you interested in the books provided?</h1>
              <p className="lead">
                Our team would love to know what you would like to read. Whether
                it is to learn a new skill or improve it, we are able to provide
                the popular books for you!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div
            className="col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center"
          >
            <div className="ml-2">
              <h1>Our collection is expanding constantly</h1>
              <p className="lead">
                Try to check in daily as our collection is always expanding! !
                We work hard to expand our book selection!
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Are you interested in the books provided?</h1>
              <p className="lead">
                Our team would love to know what you would like to read. Whether
                it is to learn a new skill or improve it, we are able to provide
                the popular books for you!
              </p>
              <a className="btn main-color btn-lg text-white" href="#">
                Sign up
              </a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Our collection is expanding constantly</h1>
              <p className="lead">
                Try to check in daily as our collection is always expanding! !
                We work hard to expand our book selection!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
