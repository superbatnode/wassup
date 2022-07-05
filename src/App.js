import { useEffect, useState } from "react";
import Register from "./routes/Register";
import regsiterImg from "./assets/login.svg";
import loginImg from "./assets/login2.svg";
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      fetch("http://localhost:8000/", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    })();
  }, []);
  return (
    <div className="container mt-5">
      {login && (
        <Register title="Login" type="login" img={regsiterImg}>
          <p className="mt-3">
            Dont have an account?{" "}
            <button className="btn" onClick={() => setLogin((prev) => !prev)}>
              Create one
            </button>
          </p>
        </Register>
      )}
      {!login && (
        <Register title="Register" type="register" img={loginImg}>
          <p className="mt-3">
            Already have an account?{" "}
            <button
              href="#"
              onClick={() => setLogin((prev) => !prev)}
              className="btn"
            >
              Login here
            </button>
          </p>
        </Register>
      )}
    </div>
  );
}

export default App;
