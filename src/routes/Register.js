export default function Register(props) {
  return (
    <div class="row">
      <div className="col-md-6">
        <div className="p-5 rounded-3">
          <div className="container py-2">
            <h1 className="display-5 fw-bold">{props.title}</h1>
            <form>
              <div className="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  autofill="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  autofill="off"
                />
              </div>
              {props.type === "register" && (
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    autofill="off"
                  />
                </div>
              )}
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Keep me logged in
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
                {props.children}    
          </div>
        </div>
      </div>
      <div className="col-6">
        <img
          src={props.img}
          alt="login"
          className="img-fluid d-none d-lg-block d-md-block d-xl-block d-xxl-block mt-5"
        />
      </div>
    </div>
  );
}
